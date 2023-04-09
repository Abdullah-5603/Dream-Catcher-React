import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedJobsCards.css'
import { MapIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'

const FeaturedJobsCards = ({job}) => {
    return (
        <div className='job-info'>
            <img src={job.companyLogo} alt="" />
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <div className='remote-fulltime-btns'>
                <button>Remote</button>
                <button>Full Time</button>
            </div>
            <div className='location'>
                <p><MapIcon className='icon'></MapIcon>{job.location}</p>
                <p><CurrencyDollarIcon className='icon'></CurrencyDollarIcon>{job.salary}</p>
            </div>
            <Link className='view-btn' to='/jobDetails'><button>View Details</button></Link>
        </div>
    );
};

export default FeaturedJobsCards;