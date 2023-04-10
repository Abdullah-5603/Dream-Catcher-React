import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetails.css';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { addJobsToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    // const data = useLoaderData();
    // console.log(data)
    // const {jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, location} = data;

    // const handleAddToStorage = job => {
    //     addJobsToDb(job.id)
    // }
    

    // return (
    //     <div className='jobDetails'>
    //         <div className='jobInfo'>
    //             <p><span>Job Description: </span>{jobDescription}</p>
    //             <p><span>Job Responsibility: </span>{jobResponsibility}</p>
    //             <p><span>Educational Requirements: </span>{educationalRequirements}</p>
    //             <p><span>Experience: </span>{experiences}</p>
    //         </div>
    //         <div className='apply-card'>
    //             <div className='card-text'>
    //                 <h4>Job Details</h4>
    //                 <hr />
    //                 <div className='icon-text'>
    //                     <CurrencyDollarIcon className='icon'></CurrencyDollarIcon><p><span>Salary: </span>{salary}</p>
    //                 </div>
    //                 <div className='icon-text'>
    //                     <CalendarDaysIcon className='icon'></CalendarDaysIcon><p><span>Job Title: </span>{jobTitle}</p>
    //                 </div>
    //                 <h4>Contact Information</h4>
    //                 <hr />
    //                 <div className='icon-text'>
    //                     <PhoneIcon className='icon'></PhoneIcon><p><span>Phone: </span>{}</p>
    //                 </div>
    //                 <div className='icon-text'>
    //                     <EnvelopeIcon className='icon'></EnvelopeIcon><p><span>Email: </span>{}</p>
    //                 </div>
    //                 <div className='icon-text'>
    //                     <MapPinIcon className='icon'></MapPinIcon><p><span>Address: </span>{location}</p>
    //                 </div>
    //             </div>
    //             <div className='card-btn'>
    //                 <Link to='/appliedJobs'><button onClick={() => handleAddToStorage(data)}>Apply Now</button></Link>
    //             </div>
    //         </div>
    //     </div>
    // )
};

export default JobDetails;