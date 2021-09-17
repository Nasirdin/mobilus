import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAccessory } from '../../redux/reducers/mobilusReducer'; 
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './basket.scss';

const Shop  = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const dispatch = useDispatch();
    const isAuth = useSelector(s => s.accessory.isAuth);
    const priceArr = cart.map((el) => {
        return el.price * 1
    })
    const priceCart = priceArr.reduce((acc, res) => {
         return  acc + res
    })
    console.log(priceCart);
    // const remove = (e) => {
        
    //     // const id = e.target.dataset.id;
    //     // const index = cart.findIndex(n => n[id])
    //     // if(index !== -1 ) {
    //     //     cart.splice(index, 1)
    //     // }
    // }
    return (
        <div className='shop'>
            <div className='container'>
            {!isAuth &&
                <div className='shop__auth'>
                    <Link className='shop__reg' to='/modal'>Регистрация</Link>
                </div>
            }
            {isAuth &&
                <div className='shop__content'>
                    <div className='shop__header'>
                        <h2 className='title-2'>Корзина</h2>
                        <Link className='shop__link' to='/category' onClick={() => dispatch(getAccessory())} >Продолжить покупки</Link>
                    </div>
                    <div className='shop__body body'>
                        <ul className='body__content'>
                            <li className='body__item'>
                                <ul className='body__info'>
                                    <li className='body__info-1'></li>
                                    <li className='body__info-2'>Наименование</li>
                                    <li className='body__info-1'>Каличество</li>
                                    <li className='body__info-1'>Цена</li>
                                    <li className='body__info-1'></li>
                                </ul>
                            </li>
                            <li className='body__goods'>
                                { 
                                    cart.map((el) => (
                                        <ul className='body__info'> 
                                            <li className='body__info-1'><img src={el.img} alt='img' className='body__img'/></li>
                                            <li className='body__info-2'>{el.name}</li>
                                            <li className='body__info-1 edi'>{el.number}
                                            <span className='body__icon-bg' >-</span>
                                            <span className='body__icon-bg' >+</span>
                                            </li>
                                            <li className='body__info-1'>{el.price}</li>
                                            <li className='body__info-remove' data-id={el.id} >X</li>
                                        </ul>
                                    ))
                                }
                            </li>
                        </ul>
                        <div className='shop__out out'>
                            <h3 className='out__title'>Итог:</h3>
                            <p className='out__subtitle'>Товаров: 0</p>
                            <p className='out__text'>Стоимость заказа без учета стоимости доставки:</p>
                            <p className='out__price'>{priceCart} cом</p>
                            <Link to='/' className='out__btn'>Оформить заказ</Link>
                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
    )
   
}

export default Shop;