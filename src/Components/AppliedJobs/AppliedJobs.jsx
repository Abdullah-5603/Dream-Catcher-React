import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from '../AppliedJobsCard/AppliedJobsCard';
import './AppliedJobs.css';

const AppliedJobs = () => {
  const data = useLoaderData();
  const [remoteOrOnsiteJobs, setRemoteOrOnsiteJobs] = useState([]);

  const handleRemoteSort = (remote) => {
    const jobs = data.filter((job) => job.remoteOrOnsite !== remote);
    setRemoteOrOnsiteJobs(jobs);
    console.log(jobs)
  };

  return (
    <div className='applied-jobs'>
      <div className='sort-btn'>
        <button onClick={() => handleRemoteSort('Remote')}>Sort by Remote</button>
        <button onClick={() => handleRemoteSort('Onsite')}>Sort by Onsite</button>
      </div>
      {remoteOrOnsiteJobs.length > 0 ? (
        remoteOrOnsiteJobs.map((job) => <AppliedJobsCard singleData={job} key={job.id} />)
      ) : (
        data.map((job) => <AppliedJobsCard singleData={job} key={job.id} />)
      )}
    </div>
  );
};

export default AppliedJobs;
