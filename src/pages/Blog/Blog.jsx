import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>
            <div className='px-12 md:px-32 my-32'>
                <div className='p-3 border mb-3 '>
                    <h2 className='my-title mb-4'>1. The differences between uncontrolled and controlled components</h2>
                    <h5 className='my-title pb-2 font-500'>Uncontrolled components</h5>
                    <p className='text-secondary lh-base'>Uncontrolled components handle their own state internally and allow the user to input data directly into the component. The component's value is not controlled by React, but rather by the DOM. This means that when the user enters data, React has no way of knowing what was entered until the form is submitted. Uncontrolled components are typically easier to set up and require less code.</p>
                    <h5 className='my-title pb-2 font-500'>Controlled components</h5>
                    <p className='text-secondary lh-base'>Controlled components, on the other hand, are components whose value is controlled by React. The component's value is stored in state, and any updates to the value are handled by React. This allows for more fine-grained control over the component's behavior, such as validating user input before it is submitted. Controlled components require more code than uncontrolled components, but offer greater control and flexibility.</p>
                </div>
                <div className='p-3 border mb-3 '>
                    <h2 className='my-title mb-4'>2. How to validate React props using PropTypes?</h2>
                    <p className='text-secondary lh-base'>
                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.It's worth noting that PropTypes are only used in development mode, and are stripped out of production builds for performance reasons. This means that you should still validate props on the server-side to ensure that your application is secure and functioning correctly. Overall, using PropTypes to validate props is a best practice in React development, and can help catch errors and bugs early in the development process. By specifying the expected types and shapes of your props, you can make your code more reliable and easier to maintain over time.
                    </p>
                </div>
                <div className='p-3 border mb-3 '>
                    <h2 className='my-title mb-4'>3.The difference between nodejs and express js?</h2>
                    <h5 className='my-title pb-2 font-500'>Node.js</h5>
                    <p className='text-secondary lh-base'>
                    Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable, high-performance applications. Node.js provides a core set of modules for handling common tasks such as file system access, networking, and streams, and it also has a large ecosystem of third-party modules that can be used to extend its functionality.</p>
                    <h5 className='my-title pb-2 font-500'>Express.js</h5>
                    <p className='text-secondary lh-base'>
                    Express.js is a web application framework built on top of Node.js. It provides a set of features and tools that make it easier to build web applications with Node.js. Express.js provides a set of middleware functions that can be used to handle common tasks such as parsing request bodies, handling cookies, and serving static files. It also provides routing and templating features that make it easier to build more complex applications.</p>
                </div>
                <div className='p-3 border mb-3 '>
                    <h2 className='my-title pb-2 font-500'>4. What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='text-secondary lh-base'>
                    A custom hook is a JavaScript function that utilizes React's hooks such as useState, useEffect, useContext, etc. to encapsulate some specific logic and can be reused across multiple components. Custom hooks allow developers to extract and reuse functionality that is common across multiple components, making code more modular and easier to maintain. Overall, creating custom hooks can help improve code reusability, reduce code duplication, and make code more modular and easier to maintain. It's a best practice in React development to extract common logic into custom hooks to promote code reuse and modularity.
                    </p>
                </div>
            </div>
           
           <div className='text-center'>
           <button className='my-button'>View Pdf</button>
           </div>
        </Container>
    );
};

export default Blog;