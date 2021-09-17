import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Img1 from '../../../category/categorynav/img1.png';
import Img2 from '../../../category/categorynav/img2.png';
import Img3 from '../../../category/categorynav/img3.png';
import Img4 from '../../../category/categorynav/img4.png';
import Img5 from '../../../category/categorynav/img5.png';
import Img6 from '../../../category/categorynav/img6.png';
import { getAccessory } from '../../../../redux/reducers/mobilusReducer';
import './category.scss';

const Category = () => {
    const dispatch = useDispatch();
    return (
        <div className='category'>
     <div className='container'>
            <h2 className='title'>Все категории</h2>
                <div className='category__block'>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Чехлы</p>
                        <img className='category__img' alt='img' src={Img1}/>
                    </Link>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Кабели и адаптеры</p>
                        <img className='category__img' alt='img' src={Img2}/>
                    </Link>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Защитные стекла</p>
                        <img className='category__img' alt='img' src={Img3}/>
                    </Link>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Наушники и колонки</p>
                        <img className='category__img' alt='img' src={Img4}/>
                    </Link>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Повербанки</p>
                        <img className='category__img' alt='img' src={Img5}/>
                    </Link>
                    <Link to='/' className='category__box'>
                        <p className='category__text'>Моноподы и штативы</p>
                        <img className='category__img-1' alt='img' src={Img6}/>
                    </Link>
                </div>
                <Link type='submit' className='all-category' onClick={() => dispatch(getAccessory())} to='/category'>Смотреть все категории</Link>
            </div>       
        </div>
    )
}

export default Category;