import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const location = useLocation();
    const jobDetails = location.pathname === '/jobDetails'
    const isStatisticsActive = location.pathname === '/statistics';
    const isAppliedJobsActive = location.pathname === '/appliedJobs';
    const isBlogActive = location.pathname === '/blog';

    return (
       <div className='main'>
         <nav className={isStatisticsActive === true ? 'statistics' : isAppliedJobsActive === true ? 'appliedJobs' : isBlogActive === true ? 'blog' : 'nav'}>
             {
                isAppliedJobsActive || isBlogActive || isStatisticsActive === true ? <img className='header-img-1' src="./src/assets/Images/All Images/Vector.png" alt="" /> : ''
            }
            <div className={isAppliedJobsActive || isBlogActive || isStatisticsActive === true ? 'navbarS' : 'navbar'}>
                <div className='navbar-link'>
                    <Link className='home-link' to='/'><h1>Dream Catcher</h1></Link>
                    <div>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/appliedJobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    <button>Start Applying</button>
                </div>
                <div className='nav-tag'>
                    {
                        isStatisticsActive === true ? 'Statistics' : isAppliedJobsActive === true ? 'Applied Jobs' : isBlogActive === true ? 'Blog' : jobDetails === true ? 'Job Details' : '' 
                    }
                </div>
            </div>
            {
                isAppliedJobsActive || isBlogActive || isStatisticsActive === true ? <img className='header-img-2' src="./src/assets/Images/All Images/Vector-1.png" alt="" /> : ''
            }
        </nav>
        <div className='header'>
            <div className='header-text'>
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>           
            </div>
            <img src="./src/assets/Images/All Images/P3OLGJ1.png" alt="" />
        </div>
       </div>
    );
};

export default Header;
