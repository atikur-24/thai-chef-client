import React from 'react';
import { Col, Row } from 'react-bootstrap';
import friedRice  from '../../../assets/recipes/fried-rice.jpg'
import burger from '../../../assets/recipes/burger.jpg'
import chicken from '../../../assets/recipes/chicken.jpg'
import soup from '../../../assets/recipes/soup.jpg'
import { HiViewGrid } from "react-icons/hi";

const RecipeCategories = () => {
    return (
        <section className='mb-5 pb-5'>
            <h2 className='fw-semibold md:fw-bold text-center'>Popular Recipe Categories</h2>
            <p className='my-color-three text-center pb-4'>Breakfast recipes · Lunch recipes · Dinner recipes · Appetizer recipes · Salad recipes · Main-course recipes · Side-dish recipes · Baked-goods</p>
        
            <Row xs={2} md={2} lg={4}>

                <Col>
                <div className='position-relative shadow  bg-body-tertiary rounded my-style my-style'>
                <img style={{height: '220px'}} className='rounded img-fluid' src={friedRice} alt="" />
                <h4 className='position-absolute top-50 start-50 translate-middle text-light fw-bold bg-secondary bg-opacity-50 py-1 px-3'> <HiViewGrid />  12+</h4>
                </div>
                <h4 className='text-center mt-3 fw-semibold text-secondary'>Rice</h4>
                </Col>

                <Col>
                <div className='position-relative shadow  bg-body-tertiary rounded my-style'>
                <img style={{height: '220px'}} className='rounded img-fluid' src={burger} alt="" />
                <h4 className='position-absolute top-50 start-50 translate-middle text-light fw-bold bg-secondary bg-opacity-50 py-1 px-3'> <HiViewGrid />  18+</h4>
                </div>
                <h4 className='text-center mt-3 fw-semibold text-secondary'>Burger</h4>
                </Col>

                <Col>
                <div className='position-relative shadow  bg-body-tertiary rounded my-style'>
                <img style={{height: '220px', }} className='rounded' src={chicken} alt="" />
                <h4 className='position-absolute top-50 start-50 translate-middle text-light fw-bold bg-secondary bg-opacity-50 py-1 px-3'> <HiViewGrid />  15+</h4>
                </div>
                <h4 className='text-center mt-3 fw-semibold text-secondary'>Chicken</h4>
                </Col>

                <Col>
                <div className='position-relative shadow  bg-body-tertiary rounded my-style'>
                <img style={{height: '220px'}} className='rounded img-fluid' src={soup} alt="" />
                <h4 className='position-absolute top-50 start-50 translate-middle text-light fw-bold bg-secondary bg-opacity-50 py-1 px-3'> <HiViewGrid />  8+</h4>
                </div>
                <h4 className='text-center mt-3 fw-semibold text-secondary'>Soup</h4>
                </Col>

            </Row>
        </section>
    );
};

export default RecipeCategories;