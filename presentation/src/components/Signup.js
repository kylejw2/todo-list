import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const Signup = (props) => {
    const [name, setName] = useState(() => '');
    const [email, setEmail] = useState(() => '');
    const [password1, setPassword1] = useState(() => '');
    const [password2, setPassword2] = useState(() => '');
    const [passwordsMatch, updateMatch] = useState(() => true);
    const [emailTaken, updateEmailTaken] = useState(() => false);
    const [remember, setRemember] = useState(() => true);

    const salt = bcrypt.genSaltSync(10);

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'remember':
                setRemember(!remember);
                break;
            case 'name':
                setName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password1':
                setPassword1(event.target.value);
                break;
            default:
                setPassword2(event.target.value);
                break;
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (password1 !== password2) {
            updateMatch(false);
            return;
        } else {
            updateMatch(true);
            createUser();
        }
    }

    const createUser = async () => {
        const user = {
            name: name,
            email: email,
            password: bcrypt.hashSync(password1, salt),
            lists: []
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/signup`, options);
        const data = await response.json();
        if (data === false) {
            updateEmailTaken(true);
        } else {
            // redirect to user-specific home page
            updateEmailTaken(false);
        }
    }

    return (
        <form className='signup'>
        <h2>Sign up</h2>
            <div className='form-group'>
                <input type='text' name='name' className='form-control' placeholder='Enter name' value={name} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <input type='email' name='email' className='form-control' placeholder='Enter email' value={email} onChange={handleChange} required/>
                <small className='form-text text-muted'>I'll never share your email with anyone else.</small>
                { emailTaken ? <small className="bright-red">Email already in use</small> : <></> }
            </div>
            <div className='form-group'>
                <input type='password' name='password1' className='form-control' placeholder='Enter password' value={password1} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
                <input type='password' name='password2' className='form-control' placeholder='Confirm password' value={password2} onChange={handleChange} required/>
                { passwordsMatch ? <></> : <small className="bright-red">Passwords do not match</small>}
            </div>
            <div className='form-check' style={{paddingBottom: '12px'}}>
                <input type='checkbox' name="remember" className="form-check-input" checked={remember} onChange={handleChange}/> {' Keep me signed in'}
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Submit</button>
            <p onClick={props.changeSignup} className='has-account'>Already have an account?</p>
        </form>
    )
}

export default Signup;