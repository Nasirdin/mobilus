import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getAccessory,} from '../../redux/reducers/mobilusReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Logo from '../logo.svg'

import './header.scss'
// import searchIcon from './search.svg'

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(s => s.accessory.isAuth)
    return (
        <div className='header'>
            <div className='header__block-1'>
                <div className='container'>
                <ul className='header__serviceNav serviceNav'>
                    <li className='serviceNav__item'><Link className='serviseNav__link' to='/delivery'>Доставка</Link></li>
                    <li className='serviceNav__item'><Link className='serviseNav__link' to='/contacts'>Контакты</Link></li>
                    <li className='serviceNav__item'><Link className='serviseNav__link' to='/job'>Вакансии</Link></li>
                    <li className='serviceNav__item'><Link className='serviseNav__link' to='/wholesale'>Оптовикам</Link></li>
                </ul>
                <a href='tel' className='header__telLink'>+996703313274</a>
                </div>
            </div>
            <div className='container'>
                <div className='header__block-2'>
                    <img className='header__logo' src={Logo} alt='logotype'/>
                    <ul className='header__nav'>
                        <li className='header__item'><NavLink activeClassName='active' className='header__link' to='/service'>Сервис</NavLink></li>
                        <li className='header__item'><NavLink activeClassName='active' className='header__link' onClick={() => dispatch(getAccessory())} to='/category'>Категория</NavLink></li>
                        <li className='header__item'><NavLink activeClassName='active' className='header__link' to='/'>Главная</NavLink></li>
                        <li className='header__item'><NavLink activeClassName='active' className='header__link' onClick={() => dispatch(getAccessory())} to='/shopping'>Корзина</NavLink></li>
                        <li className='header__item'><NavLink activeClassName='active' className='header__link' onClick={() => dispatch(getAccessory())} to='/selected'>Избранное</NavLink></li>
                    </ul>
                    <ul className='header__auth'>
                        {!isAuth && <li className='header__authItem'><Link to='/modal/signin'>Войти</Link></li>}
                        {!isAuth && <li className='header__authItem'><Link to='/modal'>Регистрация</Link></li>}
                        {isAuth && <li className='header__authItem'><Link to='/user'> <FontAwesomeIcon className='user-logo' icon={faUser}/></Link></li>}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Header;