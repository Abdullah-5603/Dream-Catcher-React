import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import FeaturedJobsCards from '../FeaturedJobsCards/FeaturedJobsCards';
import {  addToDb, getJobCart } from '../../utilities/fakedb';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('Featured.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const handleViewDetails = (job) => {
        addToDb(job.id)
    }
    return (
        <div className='featured'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs-card'>
                {
                    jobs.map(job => <FeaturedJobsCards
                        handleViewDetails={handleViewDetails}
                    key={job.id}
                    job={job}
                    ></FeaturedJobsCards>)
                }
            </div>
            
        </div>
    );
};

export default FeaturedJobs;