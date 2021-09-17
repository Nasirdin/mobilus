import React from 'react';
import {useSelector} from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faChartBar } from '@fortawesome/free-solid-svg-icons';
import likeBlack from './like-black.svg';
// import likeActive from './like-active.svg';
import shoppingCart from './shopping-cart.svg';
import './content.scss'

const cart = []
const goods = []
const Content = () => {
    const isAuth = useSelector(s => s.accessory.isAuth);
    const accessories = useSelector(s => s.accessory.accessoryData)
    
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
    const likeHandler = (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const model = e.target.dataset.model;
        const price = e.target.dataset.price;
        const img = e.target.dataset.img;
        const discription = e.target.dataset.discription;
        const block = {
            id: id,
            model: model,
            price: price,
            img: img,
            discription: discription
        }
        // if(goods.length !== 0) {
        //     goods.filter(el => {
        //         for(let i = 0; i < goods.length; i++) {
        //             if(el.id !== block.id) {
        //                 goods.push(block)
        //             } else if(el.id === block.id) {
        //                 let indx = goods.indexOf(el.id);
        //                 if(indx) {
        //                     goods.splice(indx, 1)
        //                 }
        //             }
        //         }
        //     })
        // } else {
        // }
        goods.push(block)

        localStorage.setItem('goods', JSON.stringify(goods))
        console.log(goods);
    }
    return (
        <div className='content'>
            {accessories.map((el, ind) => (
                <div className='card'>
                    <img className='card__img' src={el.img} alt='card__img'/>
                    <h3 className='card__title'>{el.model}</h3>
                    <p className='card__discription'>{el.discription}</p>
                    <div className='card__info'>
                        <p className='card__price'>{el.price} сом</p>
                        <div className='card__icon-block'>
                            {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/> */}
                            <button className='card__icon card__like' ><img className={'like-black'} onClick={likeHandler} data-id={el._id} data-img={el.img} data-discription={el.discription} data-model={el.model} data-price={el.price} alt='img' src={likeBlack}/></button>
                            
                            {!isAuth &&
                                <button className='card__icon cart' onClick={() => alert('Регистрация')}><img className='cart-icon' alt='img' src={shoppingCart}/></button>
                            }
                            {isAuth &&
                                <button className='card__icon cart' onClick={clickHandler} data-id={el.id} data-img={el.img} data-price={el.price} data-name={el.model}><img className='cart-icon' alt='img' src={shoppingCart}/></button>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content;