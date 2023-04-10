import React, { useState} from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import './Navbar.css'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isJobDetailsActive = location.pathname === '/jobDetails'
  const isStatisticsActive = location.pathname === '/statistics';
  const isAppliedJobsActive = location.pathname === '/appliedJobs';
  const isBlogActive = location.pathname === '/blog';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='large-device-nav'>
        <h3 className="header-logo">Dream Catcher</h3>
        <ul className="header-links">
          <li><ActiveLink to="/">Home</ActiveLink></li>
          <li><ActiveLink to="/statistics">Statistics</ActiveLink></li>
          <li><ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink></li>
          <li><ActiveLink to="/blog">Blog</ActiveLink></li>
        </ul>
        <button className="header-button">Start Applying</button>
      </div>
      <div className='nav-container-mobile'>
        <h3 className="header-logo-mobile">Dream Catcher</h3>
        <span className="header-toggle" onClick={handleToggle}>
          {isOpen ? (
            <BarsArrowUpIcon className="header-icon" />
          ) : (
            <BarsArrowDownIcon className="header-icon" />
          )}
          {isOpen && (
            <div className="header-links-mobile">
              <ul>
                <li><ActiveLink to="/" onClick={handleToggle}>Home</ActiveLink></li>
                <li><ActiveLink to="/statistics" onClick={handleToggle}>Statistics</ActiveLink></li>
                <li><ActiveLink to="/appliedJobs" onClick={handleToggle}>Applied Jobs</ActiveLink></li>
                <li><ActiveLink to="/blog" onClick={handleToggle}>Blog</ActiveLink></li>
              </ul>
            </div>
          )}
        </span>
      </div>
      <h3 className='nav-tag'>{
        isStatisticsActive === true ? 'Statistics' : isAppliedJobsActive === true ? 'Applied Jobs' : isBlogActive === true ? 'Blog' : isJobDetailsActive === true ? 'Job Details' : '' 
        }</h3>
    </nav>
  );
};

export default Navbar;