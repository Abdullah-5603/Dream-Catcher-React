import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog-container">
        {/* Question : 1 section */}
        <div>
            <p>
                <span className="question">Question : 1</span>
                <br /> 
                <span className='qus'>When should you use context API? </span>
            </p>
            <p>
                <span className="answer">Answer:</span>
                <br />
                One should use The Context API for scenarios such as managing themes, user authentication, or localization. It simplifies the process of passing data between components and can make one's code more maintainable and easier to understand.
            </p>
        </div>
        <br />
        {/* Question : 2 section */}
        <div>
            <p>
                <span className="question">Question : 2 </span>
                <br /> 
                <span className='qus'>What is a custom hook? </span>
            </p>
            <p>
                <span className="answer">Answer:</span>
                <br />
                A custom hook is a JavaScript function that we can create yourself to share logic between different components or functions. By using a custom hook, we can avoid duplicating code and make our code more modular and reusable.
            </p>
        </div>
        <br />
        {/* Question : 3 section */}
        <div>
            <p>
                <span className="question">Question : 3</span>
                <br /> 
                <span className='qus'>What is useRef? </span>
            </p>
            <p>
                <span className="answer">Answer:</span>
                <br />
                Ref means reference to something but in react the useRef hook returns a mutable ref object, which can be used to store a reference to a DOM node or any other value that needs to persist between component renders. Unlike state variables created with useState, changes to the useRef object do not trigger a re-render of the component
            </p>
                
        </div>
        <br />
        {/* Question : 4 section */}
        <div>
            <p>
                <span className="question">Question : 4</span>
                <br /> 
                <span className='qus'>What is useMemo? </span>
            </p>
            <p>
                <span className="answer">Answer: </span>
                <br />
                The useMemo hook in React allows us to optimize the performance of our components by memoizing the result of a computation. It takes two arguments: a function that performs the computation, and an array of dependencies. The function is only re-executed if one of the dependencies changes. By caching the result of the computation, we can avoid unnecessary re-renders and improve the performance of our app.
            </p>
        </div>
    </div>
    );
};

export default Blog;