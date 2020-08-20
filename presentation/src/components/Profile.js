import React from 'react';
import { getItem } from '../config/session';

const Profile = (props) => {

    const token = getItem('auth');

    if (false) {
        props.history.push('/');
        console.log(token);
    }

    return (<div>Hello world, you were redirected.</div>)
}

export default Profile;