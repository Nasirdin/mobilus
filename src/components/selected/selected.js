import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faChartBar } from '@fortawesome/free-solid-svg-icons';
import likeBlack from './like-black.svg';
// import likeActive from './like-active.svg';
import shoppingCart from './shopping-cart.svg';
import './selected.scss';

const cart = []
const Selected = () => {
    // const isAuth = useSelector(s => s.accessory.isAuth);
    const clickHandler = (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const name = e.target.dataset.name;
        const price = e.target.dataset.price;
        const img = e.target.dataset.img;
        const number = 1;
        
        const block = {
            id: id,
            name: name,
            price: price,
            img: img,
            number: number
        }
        
        cart.push(block)

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart);
    }
    const goods = JSON.parse(localStorage.getItem('goods'));
    console.log(goods);
    const isAuth = useSelector(s => s.accessory.isAuth)
    const uni = goods.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set()))
    console.log(uni);
    return (
        <div className='select'>
            <div className='container'>
                {!isAuth &&
                    <div className='select__auth'>
                        <Link className='select__reg' to='/modal'>Регистрация</Link>
                    </div>
                }
                {isAuth &&
                    <div className='selected'>
                        {uni.map((el, ind) => (
                            <div className='card'>
                                <img className='card__img' src={el.img} alt='card__img'/>
                                <h3 className='card__title'>{el.model}</h3>
                                <p className='card__discription'>{el.discription}</p>
                                <div className='card__info'>
                                    <p className='card__price'>{el.price} сом</p>
                                    <div className='card__icon-block'>
                                        {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/> */}
                                        <button className='card__icon card__like' ><img className={'like-black'} src={likeBlack} alt='img'/></button>

                                        {!isAuth &&
                                            <button className='card__icon cart' onClick={() => alert('Регистрация')}><img className='cart-icon' alt='img' src={shoppingCart}/></button>
                                        }
                                        {isAuth &&
                                            <button className='card__icon cart' onClick={clickHandler} data-id={el.id} data-img={el.img}  data-price={el.price} data-name={el.model}><img alt='img' className='cart-icon' src={shoppingCart}/></button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Selected;