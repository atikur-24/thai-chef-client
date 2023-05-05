import React from 'react';
import Banner from '../Header/Banner';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import RecipeCategories from '../RecipeCategories/RecipeCategories';
import Benefits from '../Benefits/benefits';

const Home = () => {
    return (
        <main>
            <Banner />
            <Container>
                <Chef />
                <RecipeCategories />
                <Benefits />
            </Container>
        </main>
    );
};

export default Home;