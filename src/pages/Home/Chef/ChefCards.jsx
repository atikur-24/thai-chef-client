import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ChefCards = ({chef}) => {
    const {id, chef_name, chef_image, years_of_experience, number_of_recipes, likes, chef_bio } = chef;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={chef_image} style={{height: '240px'}} />
                <Card.Body>
                <Card.Title className='fw-semibold fs-4'>{chef_name}</Card.Title>
                <Card.Text className='my-text'>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCards;