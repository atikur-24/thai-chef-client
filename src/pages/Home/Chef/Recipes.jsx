import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegClock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipes }) => {
    const { recipe_image, recipe_name, cooking_method, cook_time, difficulty_level, description, rating } = recipes;

    const [able, setAble] = useState(false);

    const handleDisable = () => {
      setAble(!able)
      toast("The Recipe is Your Favorite")
    }

    return (
        <Col>
            <Card className='h-100'>
            <Card.Img variant="top" src={recipe_image} style={{height: '220px'}} />
            <Card.Body>
              <Card.Title className='fw-bold my-title'>{recipe_name}</Card.Title>
                <Rating className='py-3' style={{maxWidth: 100}} readOnly  value={rating}/>
              <Card.Text className='my-text'>
                {description}
              </Card.Text>
              <Card.Text className='my-text'>
              <span className='text-secondary fw-semibold' style={{fontSize: "16px"}}>Cooking Method : </span>
                {cooking_method}
              </Card.Text>
              <Card.Text className='my-text'>
              <span className='text-secondary fw-semibold' style={{fontSize: "16px"}}>Difficulty Level : </span>
                {difficulty_level}
              </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <span>
                  <button onClick={handleDisable} className='btn btn-warning my-text' disabled={able} >Favorite </button>
                  <ToastContainer />
                </span>
                <span>
                <FaRegClock className='my-color fw-semibold'  style={{fontSize: "20px"}}/>
                <span className='my-text font-500 ms-2'>{cook_time}</span>
                </span>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default Recipes;