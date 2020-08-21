import React, { useState, useEffect } from 'react';
import { getItem } from '../config/session';
import ListHeader from './ListHeader';
import ProfileNav from './ProfileNav';

const Profile = (props) => {
    const token = getItem('auth');
    if (!token) {
        props.history.push('/'); // props.history.push may not work with Heroku. May need to use redirect
    }

    const [profile, setProfile] = useState({lists: []});

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
            });
    }, [token, setProfile]);

    const getListTitles = () => {
        return profile.lists.map((list, index) => <ListHeader key={index} name={list.name} />);
    }

    const addList = async (newList) => {
        // get the data then use setProfile to add the data to the list
        const obj = Object.assign({}, profile);
        obj.lists.push(newList);
        
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'id': obj.id
            },
            body: JSON.stringify({lists: obj.lists})
        }
        await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);

        setProfile(obj);
    }

    return (
        <>
        <ProfileNav addList={addList}/>
        <aside>
            <ul className="list-group list-group-flush sidebar">
                {getListTitles()}
            </ul>
        </aside>
        <main>

        </main>
        </>
    )
}

export default Profile;