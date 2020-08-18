import React, { useState } from 'react';
import { getEmail, getPassword, getRemember } from '../config/local';

const Login = (props) => {

    const [email, setEmail] = useState(getEmail());
    const [password, setPassword] = useState(getPassword());
    const [remember, setRemember] = useState(getRemember());

    const handleChange = (event) => {

    }

    return (
        <form className='signup'>
        <h2>Log in</h2>
            <div className="form-group">
                <input type='email' name='email' className='form-control' placeholder='Enter email' value={email} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <input type='password' name='password1' className='form-control' placeholder='Enter password' value={password} onChange={handleChange}/>
            </div>
            <div className='form-check' style={{paddingBottom: '12px'}}>
                <input type='checkbox' className="form-check-input" checked={{remember}} onChange={handleChange} /> {' Keep me signed in'}
            </div>
            <button className='btn btn-primary'>Submit</button>
            <p onClick={props.changeSignup} className='has-account'>Create an account</p>
        </form>
    )
}

export default Login;