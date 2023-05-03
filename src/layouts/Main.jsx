import React from 'react';
import Header from '../pages/Home/Header/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Container >
                <Outlet />
            </Container>
            <Footer /> 
        </div>
    );
};

export default Main;