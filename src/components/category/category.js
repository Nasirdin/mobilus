// import axios from 'axios';
import React from 'react';
import { Switch , Route} from 'react-router';
import categoryNav from './categorynav/categorynav';
import './category.scss'
import Class from './categorynav/class/class';

const Category = () => {

    return (
        <div className='category'>
            <div className='container'>
                <h3 className='title-2'>Аксессуары</h3>
                <Switch>
                    <Route exact path='/category/' component={categoryNav} />
                    <Route exact path='/category/class' component={Class} />
                </Switch>
            </div>
        </div>
    )
}

export default Category;