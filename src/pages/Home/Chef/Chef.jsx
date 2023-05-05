import React, { useEffect, useState } from 'react';
import ChefCards from './ChefCards';
import { Row } from 'react-bootstrap';

const Chef = () => {
    const [chefs, setChefs] = useState([])

    useEffect( () => {
        fetch('https://thai-kitchen-chronicles-server-atikur-24.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div className='my-5 py-md-5'>
            <h2 className='fw-semibold md:fw-bold text-center text-md-start'>Famous Thai Chefs</h2>
            <p className='my-color-three'>All of us are aware of great Thai food, knowing little about top chefs in Thailand is a great experience. As we know Thai food is exotic as its name and needs no introduction. Lets have a look on Most Popular Chefs in Thailand.</p>
            <Row xs={1} md={2} lg={3}  className="g-4 mt-3">
                {
                    chefs.map(chef => <ChefCards key={chef.id} chef={chef} />)
                }
            </Row>
        </div>
    );
};

export default Chef;