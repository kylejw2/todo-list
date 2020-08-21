import React, { useState } from 'react';
import { getItem } from '../config/session';
import logo from '../assets/logo.png';

const Profile = (props) => {
    const [profile, setProfile] = useState({});

    const token = getItem('auth');

    const getProfile = async () => {
        const options = {
            headers: {
                'auth': token
            }
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lists`, options);
        const data = await response.json();
        setProfile(data);
    }
    
    if (!token) {
        props.history.push('/'); // props.history.push may not work with Heroku. May need to use redirect
        console.log(token);
    } else {
        getProfile();
    }

    const getListTitles = () => {
        console.log(profile);
    }


    return (
        <>
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
                    <li className='nav-item'>
                        <p className='nav-link'>Add List</p>
                    </li>
                    <li className='nav-item'>
                        <p className='nav-link'>Add Task</p>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <aside>
            <ul className="list-group list-group-flush sidebar">
                <button onClick={getListTitles}>Hey</button>

                <li className="list-group-item">
                    Example
                </li>
                <li className="list-group-item">
                    Example
                </li>
                <li className="list-group-item">
                    Example
                </li>
                <li className="list-group-item">
                    Example
                </li>
            </ul>
        </aside>
        <main>

        </main>
        </>
    )
}

export default Profile;