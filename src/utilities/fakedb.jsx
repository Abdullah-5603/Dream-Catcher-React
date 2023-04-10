// const jobLoader = async (id) => {
//     const loadedJobs = await fetch('Featured.json')
//     const jobs = await loadedJobs.json();

//     const storedJobCart = localStorage.getItem('job');
//     let savedCart;

//     const addedJob = jobs.find(job => job.id === JSON.parse(storedJobCart));
//     if (addedJob) {
//         savedCart = addedJob;
//     }
//     return savedCart;
// }
const jobLoader = async (id) => {
        const loadedJobs = await fetch('Featured.json')
        const jobs = await loadedJobs.json();
        const job = jobs.find(job => job.id === id);
        return job;
}

const jobCartLoader = async () => {
    const loadedJobs = await fetch('Featured.json');
    const jobs = await loadedJobs.json();

    const storedJobCart = getJobsCart();
    let savedCart = [];
    for (const id in storedJobCart) {

        const addedJob = jobs.find(job => job.id === id);
        if (addedJob) {
            savedCart.push(addedJob)
        }
    }
    return savedCart;
}

const addJobsToDb = id => {
    let cart = getJobsCart();
    cart[id] = true;
    localStorage.setItem('job-cart', JSON.stringify(cart));
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
    //get the job from local storage
    const storedJobCart = localStorage.getItem('job');
    if (storedJobCart) {
        jobCart = JSON.parse(storedJobCart);
    }
    return jobCart;
}


export {
    addToDb,
    getJobCart,
    jobLoader,
    addJobsToDb,
    jobCartLoader
};
