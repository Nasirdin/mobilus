import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';
import Img5 from './img5.png';
import Img6 from './img6.png';

import './categorynav.scss'

const categoryNav = () => {

    return (
        <div className='category-nav'>
            <ul className='category-nav__block'>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img1} alt='img'/></div>
                    <h4 className='category-nav__title'>Чехлы</h4>
                    <Link to='/category/class' >Силиконовые</Link>
                    <Link to='/category/class' >Деревянные</Link>
                    <Link to='/category/class' >Светящиеся</Link>
                    <Link to='/category/class' >С наклейками</Link>
                    <Link to='/category/class' >Детские</Link>
                </li>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img2} alt='img'/></div>
                    <h4 className='category-nav__title'>Кабели и адаптеры</h4>
                    <Link to='/category/class' >Силиконовые</Link>
                    <Link to='/category/class' >Деревянные</Link>
                    <Link to='/category/class' >Светящиеся</Link>
                    <Link to='/category/class' >С наклейками</Link>
                    <Link to='/category/class' >Детские</Link>
                </li>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img3} alt='img'/></div>
                    <h4 className='category-nav__title'>Защитные стекла</h4>
                    <Link to='/category/class' >2D</Link>
                    <Link to='/category/class' >2.5D</Link>
                    <Link to='/category/class' >3D</Link>
                    <Link to='/category/class' >4D</Link>
                    <Link to='/category/class' >5D</Link>
                </li>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img4} alt='img'/></div>
                    <h4 className='category-nav__title'>Наушники и колонки</h4>
                    <Link to='/category/class' >Bluetooth</Link>
                    <Link to='/category/class' >Накладные</Link>
                    <Link to='/category/class' >Внутриканальные</Link>
                    <Link to='/category/class' >Вставные</Link>
                    <Link to='/category/class' >Открытые</Link>
                </li>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img5} alt='img'/></div>
                    <h4 className='category-nav__title'>Повербанки</h4>
                    <Link to='/category/class' >5000mAh</Link>
                    <Link to='/category/class' >10000mAh</Link>
                    <Link to='/category/class' >15000mAh</Link>
                    <Link to='/category/class' >20000mAh</Link>
                    <Link to='/category/class' >40000mAh</Link>
                </li>
                <li>
                    <div className='img-block'><img className='category-nav__img' src={Img6} alt='img'/></div>
                    <h4 className='category-nav__title'>Моноподы и штативы</h4>
                    <Link to='/category/class' >Монопод</Link>
                    <Link to='/category/class' >Штатив для телефона</Link>
                    <Link to='/category/class' >штатив для камеры</Link>
                    <Link to='/category/class' >чехол для штатива</Link>
                </li>
            </ul>
        </div>
    )
}

export default categoryNav;