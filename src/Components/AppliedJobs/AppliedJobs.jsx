import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from '../AppliedJobsCard/AppliedJobsCard';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const data = useLoaderData();

    return (
        <div className='applied-jobs'>
            <div className='sort-btn'>
                <button>Sort by Remote</button>
                <button>Sort by Onsite</button>
            </div>
            {
                data.map(singleData => <AppliedJobsCard
                singleData={singleData}
                key={singleData.id}
                ></AppliedJobsCard>)
            }
        </div>
    );
};

export default AppliedJobs;