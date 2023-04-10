import { json } from "react-router-dom";

const jobLoader = async () => {
    const loadedJobs = await fetch('Featured.json')
    const jobs = await loadedJobs.json();

    const storedJobCart = localStorage.getItem('job');
    let savedCart;

        const addedJob = jobs.find(job => job.id === JSON.parse(storedJobCart));
        if(addedJob){
            savedCart = addedJob;
        }
    return savedCart;

}
const addJobsToDb = id => {
    let jobCart = getJobsCart();
    const job = jobCart[id];
    if (!job) {
        localStorage.setItem('job-cart', JSON.stringify(id));
    } else {
        return;
    }
    // let shoppingCart = getJobsCart();
    // // add quantity
    // const quantity = shoppingCart[id];
    // if (!quantity) {
    //     shoppingCart[id] = 1;
    // }
    // else {
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    // }
    // localStorage.setItem('job-cart', JSON.stringify(shoppingCart));
}
const addToDb = id => {
    let jobCart = getJobCart();
    const job = jobCart[id];
    if (!job) {
        localStorage.setItem('job', JSON.stringify(id));
    } else {
        return;
    }
}

const removeFromDb = id => {
    const jobCart = getJobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}
const getJobsCart = () => {
    let jobsCart = {};
    //get the job cart from local storage
    const storedJobCart = localStorage.getItem('job-cart');
    if (storedJobCart) {
        jobsCart = JSON.parse(storedJobCart);
    }
    return jobsCart;
}
const getJobCart = () => {
    let jobCart = {};
    //get the job cart from local storage
    const storedJobCart = localStorage.getItem('job');
    if (storedJobCart) {
        jobCart = JSON.parse(storedJobCart);
    }
    return jobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getJobCart,
    deleteJobCart,
    jobLoader,
    addJobsToDb
};
