import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Home = () => {
    return (
        <div>
            <h2>This is main content</h2>
            <span style={{width: '40px', height: '50px'}}>
            <HiArrowNarrowLeft style={{width: '50px'}} />
            </span>
        </div>
    );
};

export default Home;