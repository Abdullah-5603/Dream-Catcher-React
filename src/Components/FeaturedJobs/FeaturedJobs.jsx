import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJobsCards from '../FeaturedJobsCards/FeaturedJobsCards';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([])

    useEffect(() => {
        fetch('Featured.json')
            .then(res => res.json())
            .then(data => setJobs(data.slice(0, 4)))
    }, [])

    const handleSeeAllJobs = () => {
        const seeAllBtn = document.getElementById('see-all-btn');
        seeAllBtn.style.display = 'none';
        fetch('Featured.json')
            .then(res => res.json())
            .then(data => setAllJobs(data));
    }
    return (
        <div className='featured'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs-card'>
                {allJobs.length > 0 ? allJobs.map(job => <FeaturedJobsCards
                    key={job.id}
                    job={job}
                ></FeaturedJobsCards>) :
                    jobs.map(job => <FeaturedJobsCards
                        key={job.id}
                        job={job}
                    />)
                }
            </div>
            <button id='see-all-btn' onClick={handleSeeAllJobs}>See all jobs</button>
        </div>
    );
};

export default FeaturedJobs;
