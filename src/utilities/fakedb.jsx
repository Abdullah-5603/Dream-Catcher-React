const jobLoader = async (id) => {
    const loadedJobs = await fetch('/Featured.json');
    const jobs = await loadedJobs.json();
    const job = jobs.find(job => job.id === id);
    return job;
  }
  
const jobCartLoader = async () => {
    const loadedJobs = await fetch('/Featured.json');
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

const getJobsCart = () => {
    let jobsCart = {};
    //get the job cart from local storage
    const storedJobCart = localStorage.getItem('job-cart');
    if (storedJobCart) {
        jobsCart = JSON.parse(storedJobCart);
    }
    return jobsCart;
}

export {
    jobLoader,
    addJobsToDb,
    jobCartLoader,
    getJobsCart
};
