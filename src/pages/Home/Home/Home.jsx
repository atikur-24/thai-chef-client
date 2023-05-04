import React from 'react';
import Banner from '../Header/Banner';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <main>
            <Banner />
            <Container>
                <Chef />
            </Container>
        </main>
    );
};

export default Home;