import React from 'react';
import Slider from './slider/slider';
import New from './new/new';
import Category from './category/category';
import Level from './level/level';

const Accessory = () => {
    return (
        <div className='accessory'>
            <Slider/>
            <New/>
            <Category/>
            <Level/>
        </div>
    )
}

export default Accessory;