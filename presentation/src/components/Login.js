import React, { useState } from 'react';
import { getItem, setItem, getRemember } from '../config/local';

const Login = (props) => {

    const [email, setEmail] = useState(getItem('email'));
    const [password, setPassword] = useState(() => '');
    const [remember, setRemember] = useState(getRemember());
    const [invalidLogin, setInvalidLogin] = useState(() => false);

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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, options);
        if (response.status === 401) {
            setInvalidLogin(true);
        } else {
            setInvalidLogin(false);
            if (remember) {
                setItem('auth', response.headers.get('auth'));
            }
            props.handleSuccessfulAuth(response.headers.get('auth'));
        }
    }

    return (
        <form className='signup-login'>
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
                { invalidLogin ? <small className="bright-red">Username and password incorrect.</small> : <></> }
            </div>
            <div className='form-check' style={{paddingBottom: '12px'}}>
                <input type='checkbox' className="form-check-input" checked={remember} onChange={({target}) => {
                    setRemember(!remember);
                }} /> {' Keep me signed in'}
            </div>
            <button className='btn btn-primary' onClick={(event) => {
                // send data and verify login credentials
                event.preventDefault();
                isAuthorized();
                if (remember) {
                    setItem('email', email);
                    setItem('remember', true);
                } else {
                    setItem('email', '');
                    setItem('remember', false);
                    setItem('auth', '');
                }
            }}>Submit</button>
            <p onClick={() => props.changeSignup(true)} className='has-account'>Create an account</p>
        </form>
    )
}

export default Login;