import React from 'react';
import bannerImg from '../../../assets/banner/partner.jpg'
import { HiBadgeCheck, HiOutlineBadgeCheck } from 'react-icons/hi';

const Benefits = () => {
    return (
        <section className='row row-cols-1 row-cols-md-2 mb-5 pb-5 pt-5'>
            <div className='col'>
            <h2 className='fw-semibold md:fw-bold my-title lh-base'>Become a Contributor and enjoy program benefits</h2>
            <p className='my-text'>Becoming a contributor as a chef can be a great opportunity for you to share your culinary expertise and showcase your recipes. You'll have the chance to reach a wide audience, increase your exposure, and collaborate with other food enthusiasts.</p>
            <div className='d-flex align-items-start gap-4'>
                <p className='pt-1'>
                <HiBadgeCheck className='fs-3 my-color' />
                </p>
                <div>
                    <p className='fw-bold fs-4 my-title'>Become a contributor</p>
                    <span className='my-text'>Join our culinary community and become a contributor to showcase your skills.</span>
                </div>
            </div>
            <div className='d-flex align-items-start gap-4 my-4'>
                <p className='pt-1'>
                <HiBadgeCheck className='fs-3 my-color' />
                </p>
                <div>
                    <p className='fw-bold fs-4 my-title'>Chef program perks</p>
                    <span className='my-text'>Discover the benefits of our chef program, including increased exposure, networking opportunities.</span>
                </div>
            </div>
            <div className='d-flex align-items-start gap-4'>
                <p className='pt-1'>
                <HiBadgeCheck className='fs-3 my-color' />
                </p>
                <div>
                    <p className='fw-bold fs-4 my-title'>Cooking Collaboration Opportunities</p>
                    <span className='my-text'>Collaborate with other chefs and food enthusiasts to share culinary ideas, learn new techniques, and create unique dishes.</span>
                </div>
            </div>
            </div>

            <div className='col'>
                <img className='img-fluid rounded h-100  w-100' src={bannerImg} alt="" />
            </div>
        </section>
    );
};

export default Benefits;