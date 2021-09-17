import React from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    return (
        <div className='leftNav'>
            <ul className='leftNav__block'>
                <li>
                    <h4 className='leftNav__title'>Чехлы</h4>
                    <Link to='/category/class'>Силиконовые</Link>
                    <Link to='/category/class'>Деревянные</Link>
                    <Link to='/category/class'>Светящиеся</Link>
                    <Link to='/category/class'>С наклейками</Link>
                    <Link to='/category/class'>Детские</Link>
                </li>
                <li>
                    <h4 className='leftNav__title'>Кабели и адаптеры</h4>
                    <Link to='/category/class'>Силиконовые</Link>
                    <Link to='/category/class'>Деревянные</Link>
                    <Link to='/category/class'>Светящиеся</Link>
                    <Link to='/category/class'>С наклейками</Link>
                    <Link to='/category/class'>Детские</Link>
                </li>
                <li>
                    <h4 className='leftNav__title'>Защитные стекла</h4>
                    <Link to='/category/class'>2D</Link>
                    <Link to='/category/class'>2.5D</Link>
                    <Link to='/category/class'>3D</Link>
                    <Link to='/category/class'>4D</Link>
                    <Link to='/category/class'>5D</Link>
                </li>
                <li>
                    <h4 className='leftNav__title'>Наушники и колонки</h4>
                    <Link to='/category/class'>Bluetooth</Link>
                    <Link to='/category/class'>Накладные</Link>
                    <Link to='/category/class'>Внутриканальные</Link>
                    <Link to='/category/class'>Вставные</Link>
                    <Link to='/category/class'>Открытые</Link>
                </li>
                <li>
                    <h4 className='leftNav__title'>Повербанки</h4>
                    <Link to='/category/class'>5000mAh</Link>
                    <Link to='/category/class'>10000mAh</Link>
                    <Link to='/category/class'>15000mAh</Link>
                    <Link to='/category/class'>20000mAh</Link>
                    <Link to='/category/class'>40000mAh</Link>
                </li>
                <li>
                    <h4 className='leftNav__title'>Моноподы и штативы</h4>
                    <Link to='/category/class'>Монопод</Link>
                    <Link to='/category/class'>Штатив для телефона</Link>
                    <Link to='/category/class'>штатив для камеры</Link>
                    <Link to='/category/class'>чехол для штатива</Link>
                </li>
            </ul>
        </div>
    )
}

export default Leftnav;