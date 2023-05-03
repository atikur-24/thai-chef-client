import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../assets/banner/fried-rice.jpg'
import banner2 from '../../../assets/banner/soup.jpg'
import banner3 from '../../../assets/banner/beef.jpg'
import star from '../../../assets/icons/star.png'
import halfStar from '../../../assets/icons/rating.png'

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h3 className="fw-bold fs-1 mb-5 py-2 bg-secondary bg-opacity-25 text-opacity-1005">Thai Fried Rice</h3>
          <p className="fw-semibold fs-5"> It can be made with different types of rice, such as jasmine or brown rice, and can be spiced up with chili peppers or other seasonings.</p>
       <span>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
       </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h3 className="fw-bold fs-1 mb-5 py-2 bg-secondary bg-opacity-25 text-opacity-100">Hot & Sour Shrimp Soup</h3>
          <p className="fw-semibold fs-5">Hot & Sour Shrimp Soup is a flavorful and satisfying dish that is perfect for anyone who loves spicy and sour flavors. It's a classic Thai dish that is enjoyed by many people.</p>
          <span>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={halfStar} alt="star" />
        </span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
          <h3 className="fw-bold fs-1 py-2 bg-secondary bg-opacity-25 text-opacity-100">Beef Steak</h3>
          <p className="fw-semibold fs-5 mt-5">  It's a classic dish that is enjoyed by many people around the world and is often served with a variety of sides and accompaniments.</p>
          <span>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={halfStar} alt="star" />
        </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
