import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { HiMail, } from "react-icons/hi";
import Recipes from './Recipes';

const ChefDetails = () => {
    const ChefDetails = useLoaderData();
    const { chef_name, chef_image, years_of_experience, number_of_recipes, likes, chef_bio, email, address, recipes } = ChefDetails;

    return (
        <Container className='my-5'>
            <Card>
                <Card.Header className='py-3 text-center'>
                    <Card.Title className='fw-bold fs-4 my-title'>{chef_name}</Card.Title>
                </Card.Header>
                <Row xs={1} md={2}>
                    <Col>
                        <Card.Img variant="top" src={chef_image} />
                    </Col>
                    <Col className='pe-3'>
                        <Card.Text className='mt-3 my-text'>
                        <span className='text-secondary fw-semibold' style={{fontSize: "18px"}}>Chef Bio : </span>
                        <span className='lh-lg'>{chef_bio}</span>
                        </Card.Text>
                        <Card.Text className='font-500 my-text mt-5 lh-lg'>
                        <span className='text-secondary fw-semibold' style={{fontSize: "18px"}}>Experience : </span> {years_of_experience}
                            <br />
                        <span className='text-secondary fw-semibold' style={{fontSize: "18px"}}>Recipes : </span> {number_of_recipes}+
                        <br />
                        <span className='text-secondary fw-semibold' style={{fontSize: "18px"}}>Likes : </span> {likes}
                        </Card.Text>
                        <Card.Text className='mt-5 pt-3 my-text d-flex justify-content-between'>
                        <span><FaMapMarkerAlt className='text-secondary fw-semibold' style={{fontSize: "18px"}} /> {address} </span> 
                        <span><HiMail className='text-secondary fw-semibold ' style={{fontSize: "18px"}} /> {email} </span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card>
            <section className='my-5 py-5'>
                <h4 className='fw-bold fs-3 text-center'> Spicy Recipes</h4>
                <p className='my-color text-center my-color-three'><small>{chef_name} makes testy and heathy recipes. see some latest recipes</small></p>
                <Row xs={1} md={2} lg={3} className='g-4 pt-4'>
                {
                    recipes.map( (recipe, idx) => <Recipes key={idx} recipes={recipe} /> )
                }
            </Row>
            </section>
        </Container>
    );
};

export default ChefDetails;