import React from 'react';
import './JobCategoryList.css'

const JobCategoryList = ({list}) => {
    return (
        <div className='job-category-list'>
            <img src={list.logo} alt="" />
            <h4>{list.name}</h4>
            <p>{list.availability}</p>
        </div>
    );
};

export default JobCategoryList;