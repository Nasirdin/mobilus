
import React from 'react';
import { Carousel } from 'react-bootstrap';

import Img1 from './img1.jpg';
import Img2 from './img2.jpg';

import './slider.scss';


const Slider = () => {

    return (
        <Carousel className='slider'>
            <Carousel.Item className='slider__item'>
                <img className="d-block w-100 slider" src={Img1} alt="First slide" />
                <Carousel.Caption className='slider__caption'>
                    <h2 className='slider__title'>Акция лета 2021 – на все чехлы iphone</h2>
                    <p className='slider__subtitle'>1+1=3</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider__item'>
                <img className="d-block w-100 slider" src={Img2} alt="First slide" />
                <Carousel.Caption className='slider__caption'>
                    <h2 className='slider__title'>Акция лета 2021 – на все чехлы iphone</h2>
                    <p className='slider__subtitle'>1+1=3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
    )
}

export default Slider;