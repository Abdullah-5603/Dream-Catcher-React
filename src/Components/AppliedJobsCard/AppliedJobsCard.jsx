import React from 'react';
import './AppliedJobsCard.css'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const AppliedJobsCard = ({singleData}) => {
    const {fullTimeOrPartTime, remoteOrOnsite, companyName, companyLogo, salary, jobTitle, location} = singleData;

    

    return (
        <div className='applied-jobs-card'>
            <img src={companyLogo} alt="" />
            <div className='applied-jobs-card-info'>
                <h4>{jobTitle}</h4>
                <p>{companyName}</p>
                <div className='remote-fulltime-btns'>
                    <button>{remoteOrOnsite}</button>
                    <button>{fullTimeOrPartTime}</button>
                </div>
                <div className='icon-text'>
                    <div className='text-icon'><MapPinIcon className='icon' /><p>{location}</p></div>
                    <div className='text-icon'><CurrencyDollarIcon className='icon' /><p>Salary: {salary}</p></div>
                </div>
            </div>
            <Link className='view-btn' to='/jobDetails'><button>View Details</button></Link>
            
        </div>
    );
};

export default AppliedJobsCard;