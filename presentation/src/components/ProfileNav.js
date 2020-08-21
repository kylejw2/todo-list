import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../assets/logo.png';


const ProfileNav = (props) => {
    
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const toggle = () => setModal(!modal);

    const handleList = () => {
        const obj = {name, description};
        obj.tasks = [];
        props.addList(obj);
        toggle();
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
                    <li className='nav-item' onClick={toggle}>
                        <div>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Add a new list</ModalHeader>
                                <ModalBody>
                                    <form>
                                        <input type='text' value={name} placeHolder='New list name' style={{width: '100%', marginBottom: '10px'}} onChange={({target}) => setName(target.value)}/>
                                        <input type='text' value={description} placeHolder='List description' style={{width: '100%'}} onChange={({target}) => setDescription(target.value)}/>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={handleList}>Create List</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <p className='nav-link'>Add List</p>
                    </li>
                    <li className='nav-item'>
                        <p className='nav-link'>Add Task</p>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default ProfileNav;