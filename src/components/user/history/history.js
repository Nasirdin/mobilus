import React from 'react';
import './history.scss'

const History = () => {
    return (
        <div className='history'>
            <ul className='history__block'>
                <li className='history__header header'>
                    <ul className='header__items'>
                        <li className='header__item'>Дата</li>
                        <li className='header__item'>№ заказа</li>
                        <li className='header__item'>Сумма</li>
                        <li className='header__item'>Статус</li>
                        <li className='header__name'>Товар</li>

                    </ul>
                </li>
                <li className='history__body body'>
                    <ul className='body__goods-block'>
                        <li className='body__goods'>
                            <ul className='body__items'>
                                <li className='body__item'></li>
                                <li className='body__item'></li>
                                <li className='body__item'></li>
                                <li className='body__item'></li>
                                <li className='body__item'></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default History;