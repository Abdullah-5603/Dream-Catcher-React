import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedJobsCards.css'
import { MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'

const FeaturedJobsCards = ({job, handleViewDetails}) => {
    return (
        <div className='job-info'>
            <img src={job.companyLogo} alt="" />
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <div className='remote-fulltime-btns'>
                <button>{job.remoteOrOnsite}</button>
                <button>{job.fullTimeOrPartTime}</button>
            </div>
            <div className='location'>
                <p><MapPinIcon className='icon'></MapPinIcon>{job.location}</p>
                <p><CurrencyDollarIcon className='icon'></CurrencyDollarIcon>{job.salary}</p>
            </div>
            <Link className='view-btn' to='/jobDetails'><button onClick={() => handleViewDetails(job)}>View Details</button></Link>
        </div>
    );
};

export default FeaturedJobsCards;