import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../assets/logo.png';
import Calendar from 'react-calendar';


const ProfileNav = (props) => {
    
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [taskName, setTaskName] = useState('');
    const [finishDate, setFinishDate] = useState(new Date());
    const [noFinishDate, setNoFinishDate] = useState(false);
    
    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);

    const handleList = () => {
        const obj = {name, description};
        obj.tasks = [];
        props.addList(obj);
        toggle1();
        setName('');
        setDescription('');
    }

    const handleChange = (date) => {
        setFinishDate(date);
    }

    const handleTask = () => {
        const newTask = {name: taskName}
        if (!noFinishDate) {
            newTask.finishDate = finishDate.toString();
        }
        props.addTask(newTask);
        toggle2();
        setTaskName('');
        setFinishDate(new Date());
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container-fluid'>
            <div className="nav nav-justified col-1">
                {/* <i className="fas fa-bars"></i>  THINK ABOUT PUTTING A TOGGLE BUTTON FOR THE SIDEBAR*/}
            </div>
            <div className="nav nav-justified col-6 offset-2">
                <img src={logo} className='navbar-brand mx-auto' alt='' width='75px'/>
            </div>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item' onClick={toggle1}>
                        <div>
                            <Modal isOpen={modal1} toggle={toggle1}>
                                <ModalHeader toggle={toggle1}>Add a new list</ModalHeader>
                                <ModalBody>
                                    <form>
                                        <input type='text' value={name} placeholder='New list name' style={{width: '100%', marginBottom: '10px'}} onChange={({target}) => setName(target.value)} minLength="1" required/>
                                        <input type='text' value={description} placeholder='List description' style={{width: '100%'}} onChange={({target}) => setDescription(target.value)}/>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={handleList}>Create List</Button>{' '}
                                <Button color="secondary" onClick={toggle1}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <p className='nav-link'>Add List</p>
                    </li>
                    <li className='nav-item' onClick={toggle2}>
                        <div>
                            <Modal isOpen={modal2} toggle={toggle2}>
                                <ModalHeader toggle={toggle2}>Add a new task</ModalHeader>
                                <ModalBody>
                                    <form>
                                        <input type='text' value={taskName} placeholder='New task name' style={{width: '100%', marginBottom: '10px'}} onChange={({target}) => setTaskName(target.value)} minLength="1"/>
                                        {noFinishDate ? '' : <Calendar value={finishDate} onChange={handleChange}/>}
                                        <input type='checkbox' checked={noFinishDate} style={{marginTop: "10px"}} onChange={() => setNoFinishDate(!noFinishDate)}/> {' No finish date'}
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={handleTask}>Create Task</Button>{' '}
                                <Button color="secondary" onClick={toggle2}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <p className='nav-link'>Add Task</p>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default ProfileNav;