import React from 'react';
import Banner from '../Header/Banner';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import RecipeCategories from '../RecipeCategories/RecipeCategories';

const Home = () => {
    return (
        <main>
            <Banner />
            <Container>
                <Chef />
                <RecipeCategories />
            </Container>
        </main>
    );
};

export default Home;