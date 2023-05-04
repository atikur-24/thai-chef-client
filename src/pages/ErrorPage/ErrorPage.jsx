import React from 'react';
import Lottie from "lottie-react";
import errorImg from '../../assets/error/98642-error-404.json'
import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const ErrorPage = () => {
    const {error} = useRouteError();
    return (
        <Container className='d-flex align-items-center gap-5'>
            <Lottie className='w-50' animationData={errorImg} loop={true} />
            <div>
                <h2 className='fs-1 fw-bolder'>Page Not Found</h2>
                <h5 className='my-5 fw-semibold'>{error?.message}</h5>
                <Link to='/' className='my-button fw-bold'> <span className='me-2'> <HiArrowNarrowLeft /> </span> Back to Home page</Link>
            </div>
        </Container>
    );
};

export default ErrorPage;