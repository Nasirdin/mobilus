import React from 'react';

import Content from './classContent/content';
import Leftnav from './classLeftNav/leftNav';
import Nav from './classNav/classNav';
import './class.scss'

const Class = () => {
    return (
        <div className='class'>
            <Nav/>
            <div className='class__content'>
                <Leftnav/>
                <Content/>
            </div>
        </div>
    )
}

export default Class;