import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import { jobCartLoader, jobLoader } from './utilities/fakedb';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobCartLoader
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'jobDetails/:jId',
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => jobLoader(params.jId)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
