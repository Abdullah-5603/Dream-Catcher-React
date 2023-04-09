import React, { useEffect, useState } from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import './JobCategory.css'

const JobCategory = () => {
    const [lists, setList] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, []);


    return (
        <div className='job-category'>
            <h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
<div>
{
                    lists.map(list => <JobCategoryList
                        list={list}
                    ></JobCategoryList>)
                }
</div>

        </div>
    );
};

export default JobCategory;