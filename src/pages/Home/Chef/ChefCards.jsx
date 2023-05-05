import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ChefCards = ({chef}) => {
    const {id, chef_name, chef_image, years_of_experience, number_of_recipes, likes } = chef;

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img className='p-3' variant="top" src={chef_image} style={{height: '240px'}} />
                <Card.Body>
                <Card.Title className='fw-bold fs-4'>{chef_name}</Card.Title>
                <Card.Text className='font-500 my-text'>
                <span style={{fontSize: "18px"}}> <span className='fw-semibold'>{years_of_experience}</span> Years Experience</span>
                <br />
                <span style={{fontSize: "18px"}} > <span className='fw-semibold'>{number_of_recipes}</span> Recipes </span>
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>
                        <Link to={`/${id}`} className='my-button p-2 fw-semibold'>View Recipes</Link>
                    </p>
                    <p className='my-text font-500' style={{fontSize: '18px'}}>
                       <span className='me-2 fw-semibold'>{likes}</span> <AiFillLike className='my-text mb-1' />
                    </p>
                </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCards;