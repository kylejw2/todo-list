import React, { useState } from 'react';
import { getItem, setItem, getRemember } from '../config/local';

const Login = (props) => {

    const [email, setEmail] = useState(getItem('email'));
    const [password, setPassword] = useState(getItem('password'));
    const [remember, setRemember] = useState(getRemember());

    const isAuthorized = async () => {
        const potentialUser = {
            email: email,
            password: password
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(potentialUser)
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/lists/login`, options);
        const authorized = await response.json();
        console.log(authorized);
    }

    return (
        <form className='signup'>
        <h2>Log in</h2>
            <div className="form-group">
                <input type='email' name='email' className='form-control' placeholder='Enter email' value={email} onChange={({target}) => {
                    setEmail(target.value);
                }} required/>
            </div>
            <div className='form-group'>
                <input type='password' name='password1' className='form-control' placeholder='Enter password' value={password} onChange={({target}) => {
                    setPassword(target.value);
                }} required/>
            </div>
            <div className='form-check' style={{paddingBottom: '12px'}}>
                <input type='checkbox' className="form-check-input" checked={remember} onChange={({target}) => {
                    setRemember(!remember);
                }} /> {' Keep me signed in'}
            </div>
            <button className='btn btn-primary' onClick={async (event) => {
                // send data and verify login credentials
                event.preventDefault();
                isAuthorized();
                if (remember) {
                    setItem('email', email);
                    setItem('remember', true);
                } else {
                    setItem('email', '');
                    setItem('remember', false);
                }
            }}>Submit</button>
            <p onClick={props.changeSignup} className='has-account'>Create an account</p>
        </form>
    )
}

export default Login;