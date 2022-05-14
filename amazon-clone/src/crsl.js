import React from 'react'
import { Carousel } from 'react-bootstrap';
import './crsl.css';
function crsl ()
{
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://m.media-amazon.com/images/I/61MyQlu87AL._SX3000_.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src="https://m.media-amazon.com/images/I/61-vC4Bt0CL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default crsl;