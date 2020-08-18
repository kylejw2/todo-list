import React, { useState } from 'react';
import Nav from './Nav';
// import Footer from './Footer';
import bgImg from '../assets/bgImg.jpg';
import bgImgMobile from '../assets/bgImgMobile.jpg';
import Signup from './Signup';
import Login from './Login';

const Home = () => {
    const [signup, setSignup] = useState(() => true);

    const toggleSignup = () => {
        setSignup(!signup);
    }


    return (
        <>
        <Nav />
        {window.innerWidth > 576 ? <img src={bgImg} className='bgImg' alt=''/> : <img src={bgImgMobile} className='bgImg' alt=''/>}
        <div className='bgFilter'></div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='offset-md-7 col-md-4 col-xs-10 align-items-center align'>
                { signup ? <Signup changeSignup={toggleSignup} /> : <Login changeSignup={toggleSignup} />}
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Home;