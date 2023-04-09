import React from 'react';
import './Navbar.css'
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const jobDetails = location.pathname === '/jobDetails'
    const isStatisticsActive = location.pathname === '/statistics';
    const isAppliedJobsActive = location.pathname === '/appliedJobs';
    const isBlogActive = location.pathname === '/blog';

    return (
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
    );
};

export default Navbar;