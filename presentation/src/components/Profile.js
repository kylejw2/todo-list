import React, { useState, useEffect } from 'react';
import { getItem } from '../config/session';
import ListHeader from './ListHeader';
import ProfileNav from './ProfileNav';
import Task from './Task';
import { Button, ButtonGroup } from 'reactstrap';

const Profile = (props) => {
    const token = getItem('auth');
    if (!token) {
        props.history.push('/'); // props.history.push may not work with Heroku. May need to use redirect
    }

    const [profile, setProfile] = useState({lists: []});
    const [listDisplayed, setListDisplayed] = useState({name: '', description: '', tasks: []});
    const [indexDisplayed, setIndexDisplayed] = useState(0);

    useEffect(() => {
        const options = {
            headers: {
                'auth': token
            }
        }
        fetch(`${process.env.REACT_APP_API_URL}/lists`, options)
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                if (data.lists.length > 0) {
                    setListDisplayed(data.lists[indexDisplayed]);
                }
            });
    }, [token, setProfile, indexDisplayed]);

    const displayList = (index) => {
        setListDisplayed(profile.lists[index]);
        setIndexDisplayed(index);
    }

    const getListTitles = () => {
        return profile.lists.map((list, index) => <ListHeader key={index} displayList={displayList} index={index} name={list.name} />);
    }

    const addList = async (newList) => {
        // get the data then use setProfile to add the data to the list
        if (profile.lists.length === 0) {
            setListDisplayed(newList);
        }
        const obj = Object.assign({}, profile);
        obj.lists.push(newList);
        const id = profile.id;
        delete obj.id;
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': id
            },
            body: JSON.stringify({lists: obj.lists})
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        obj.id = id;
        setProfile(obj);
    }

    const listTasks = () => {
        return listDisplayed.tasks.map((task, index) => <Task task={task} index={index} key={index} removeTask={removeTask} updateTask={updateTask}/>)
    }

    const addTask = async (task) => {
        if (listDisplayed.name === '') {
            window.alert('You must create a list before adding a task.')
            return;
        }
        const obj = Object.assign({}, profile);
        const id = obj.id;
        delete obj.id;
        obj.lists[indexDisplayed].tasks.push(task);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': profile.id
            },
            body: JSON.stringify(obj)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        obj.id = id;
        setProfile(obj);
    }

    const removeTask = async (index) => {
        const obj = Object.assign({}, profile);
        const id = obj.id;
        delete obj.id;
        obj.lists[indexDisplayed].tasks.splice(index, 1);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': id
            },
            body: JSON.stringify(obj)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        obj.id = id;
        setProfile(obj);
    }

    const removeList = async (bool) => {
        if (bool) {
            document.title = "Way to go!"
        } else {
            document.title = "Keep trying!"
        }
        const obj = Object.assign({}, profile);
        const id = obj.id;
        delete obj.id;
        obj.lists.splice(indexDisplayed, 1);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': id
            },
            body: JSON.stringify(obj)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        obj.id = id;
        setProfile(obj);
        if (obj.lists.length !== 0) {
            setIndexDisplayed(0);
            setListDisplayed(profile.lists[0])
        } else {
            setIndexDisplayed(0);
            setListDisplayed({name: '', description: '', tasks: []})
        }
    }

    const updateTask = async (task, index) => {
        const obj = Object.assign({}, profile);
        const id = obj.id;
        delete obj.id;
        obj.lists[indexDisplayed].tasks.splice(index, 1, task);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': id
            },
            body: JSON.stringify(obj)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        obj.id = id;
        setProfile(obj);
    }

    return (
        <>
        <ProfileNav addList={addList} addTask={addTask}/>
        <div className='container-fluid' style={{padding: '0'}}>
            <div className='row'>
                <aside className='col-md-3'>
                    <ul className="list-group list-group-flush sidebar">
                        {getListTitles()}
                    </ul>
                </aside>
                <main className='col-md-9'>
                    <h1 className="display-title">{listDisplayed.name}
                    {
                        profile.lists.length > 0 ?
                        <span style={{float: 'right', marginRight: "20px"}}>
                        <ButtonGroup>
                            <Button color="success" onClick={() => removeList(true)}><i className="fa fa-check"></i></Button>
                            <Button color="danger" onClick={() => removeList(false)}><i className="fa fa-remove"></i></Button>
                        </ButtonGroup>
                        </span>
                        : 'To begin, add your first list!'
                    }
                    </h1>
                    <h3 style={{fontWeight: '200', fontStyle: 'italic'}}>{listDisplayed.description}</h3>
                    <ul>
                        {listTasks()}
                    </ul>
                </main>
            </div>
        </div>
        </>
    )
}

export default Profile;