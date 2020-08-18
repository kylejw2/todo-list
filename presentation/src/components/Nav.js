import React from 'react';
import logo from '../assets/logo.png';
// watch out for some errors from Heroky when using hrefs

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-md bg-transparent navbar-dark bg-dark' style={{width: "100%"}}>
        <div className='container-fluid'>
            <a className='navbar-brand' href='/'><img src={logo} alt='' width='75px'/></a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
                <span className='navbar-toggler-icon'></span>
            </button>
        </div>
        <div className='collapse navbar-collapse' id='navbarResponsive' >
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link disabled' href='/'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link disabled' href='/'>Pricing</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Sign up</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Log in</a>
                    </li>
                </ul>
        </div>
    </nav>
    )
}

export default Nav;