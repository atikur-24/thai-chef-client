import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const ChefDetails = useLoaderData();
    const {id, chef_name, chef_image, years_of_experience, number_of_recipes, likes, chef_bio } = ChefDetails;

    return (
        <Container className='my-5'>
            <Card>
                <Card.Header className='py-3 text-center'>
                    <Card.Title className='fw-bold fs-4'>{chef_name}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={chef_image} className='w-50' />
                <span className=''>
                    {chef_bio}
                </span>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    {chef_bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ChefDetails;