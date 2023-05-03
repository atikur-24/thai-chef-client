import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='py-5 bg-secondary bg-gradient'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 my-color-gray'>
                    <div className='col'>
                        <h4 className='my-color fw-semibold mb-4'>Contact</h4>
                        <p><span className='me-2'> <FaMapMarkerAlt className='my-color-two' /> </span> Bangkok, Thailand</p>
                        <p><span className='me-2'> <FaPhoneAlt className='my-color-two' /> </span> thaikitchen@gamil.com</p>
                        <p><span className='me-2'> <FaEnvelope className='my-color-two' /> </span> +777 033 655</p>
                        <p>
                            <span className='me-4'> <FaFacebook style={{height: '40px'}} className='my-color-two' /> </span>
                            <span className='me-4'> <FaInstagram className='my-color-two' /> </span>
                            <span className=''> <FaTwitter className='my-color-two' /> </span>
                        </p>
                    </div>
                    <div className='col'>
                        <h4 className='my-color fw-semibold mb-4'>Recipe Categories</h4>
                        <p>Thai Basil Chicken </p>
                        <p>Sticky Thai Chicken Wings</p>
                        <p>Thai Fish Green Curry</p>
                        <p>Stir-Fried Noodles</p>
                    </div>
                    <div className='col'>
                        <h4 className='my-color fw-semibold mb-4'>Subscribe</h4>
                        <p>Register and get notified about all the news & updates before it gets too late.</p>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Your email address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <button className='my-button fw-semibold'>Send</button>
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <p className='my-color-gray text-center pt-3'>&copy; 2023 Thai Kitchen Chronicles. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;