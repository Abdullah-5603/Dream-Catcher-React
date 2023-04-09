import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-text'>
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>           
            </div>
            <img src="./src/assets/Images/All Images/P3OLGJ1.png" alt="" />
        </div>
    );
};

export default Header;
