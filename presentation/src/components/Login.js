import React, { useState } from 'react';
import { getItem, setItem } from '../config/local';
import bcrypt from 'bcryptjs';

const Login = (props) => {

    const [email, setEmail] = useState(getItem('email'));
    const [password, setPassword] = useState(getItem('password'));
    const [remember, setRemember] = useState(getItem('remember'));

    const salt = bcrypt.genSaltSync(10);

    const isAuthorized = () => {
        // need to verify on back-end if the credentials match
    }

    return (
        <form className='signup'>
        <h2>Log in</h2>
            <div className="form-group">
                <input type='email' name='email' className='form-control' placeholder='Enter email' value={email} onChange={({target}) => {
                    setEmail(target.value);
                }}/>
            </div>
            <div className='form-group'>
                <input type='password' name='password1' className='form-control' placeholder='Enter password' value={password} onChange={({target}) => {
                    setPassword(target.value);
                }}/>
            </div>
            <div className='form-check' style={{paddingBottom: '12px'}}>
                <input type='checkbox' className="form-check-input" checked={remember} onChange={({target}) => {
                    setRemember(!remember);
                }} /> {' Keep me signed in'}
            </div>
            <button className='btn btn-primary' onClick={async (event) => {
                // send data and verify login credentials
                event.preventDefault();
                if (remember) {
                    setItem('email', email);
                    // await setItem('password', bcrypt.hashSync(password, salt));
                    setItem('remember', true);
                    console.log(bcrypt.hash(password, salt))
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