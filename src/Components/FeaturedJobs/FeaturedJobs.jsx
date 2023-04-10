import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJobsCards from '../FeaturedJobsCards/FeaturedJobsCards';
import { addToDb } from '../../utilities/fakedb';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([])

    useEffect(() => {
        fetch('Featured.json')
            .then(res => res.json())
            .then(data => setJobs(data.slice(0, 4)))
    }, [])

    const handleViewDetails = (job) => {
        addToDb(job.id);
    }

    const handleSeeAllJobs = () => {
        fetch('Featured.json')
            .then(res => res.json())
            .then(data => setAllJobs(data));
    }
    console.log(allJobs)
    return (
        <div className='featured'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs-card'>
                {allJobs.length > 0 ? allJobs.map(job => <FeaturedJobsCards
                    handleViewDetails={handleViewDetails}
                    key={job.id}
                    job={job}
                ></FeaturedJobsCards>) :
                    jobs.map(job => <FeaturedJobsCards
                        handleViewDetails={handleViewDetails}
                        key={job.id}
                        job={job}
                    />)
                }
            </div>
            <button onClick={handleSeeAllJobs}>See all jobs</button>
        </div>
    );
};

export default FeaturedJobs;
