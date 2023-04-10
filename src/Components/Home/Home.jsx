import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './Hme.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='home'>
                <JobCategory></JobCategory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;