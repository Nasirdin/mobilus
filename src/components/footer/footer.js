import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './arrow.svg';
import img1 from './telegram.svg';
import img2 from './Vector.svg';
import img3 from './Vector-1.svg';
import img4 from './Vector-2.svg';

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <ul className='footer__block'>
                        <li className='footer__item'>
                            <h3 className='footer__title'>Продукция</h3>
                            <ul>
                                <li><Link to='/</li>' className='footer__link'>Каталог</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Конструктор чехлов</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Новинки</Link></li>
                                <li><Link className='footer__link'>Акции</Link></li>
                            </ul>
                        </li>
                        <li className='footer__item'>
                            <h3 className='footer__title'>Информация</h3>
                            <ul>
                                <li><Link to='/</li>' className='footer__link'>Адреса магазинов</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Доставка</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Оплата</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Сервис</Link></li>
                                <li><Link to='/</li>' className='footer__link'>Возврат товара</Link></li>
                            </ul>
                        </li>
                        <li className='footer__item'>
                            <h3 className='footer__title'>Компания</h3>
                            <ul>
                                <li><Link to='/' className='footer__link'>О нас</Link></li>
                                <li><Link to='/' className='footer__link'>Оптовикам</Link></li>
                                <li><Link to='/' className='footer__link'>Вакансии</Link></li>
                                <li><Link to='/' className='footer__link'>Контакты</Link></li>
                                <li><Link to='/' className='footer__link'>Публичная оферта</Link></li>
                            </ul>
                        </li>--
                        <li>
                            <h3 className='footer__title'>Подпишитесь на наши новости</h3>
                            <form>
                                <label><input className='footer__email' type='email' required placeholder='E-mail'/></label>
                                <button type='submit' className='footer__btn'><img className='btn-img' src={arrow} alt='arrow'/></button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div className='footer__bottom bottom'>
                    <p className='bottom__text-1'>ООО “Мобилус-рус” 2021</p>
                    <a className='tel' href='/'>+7 (921) 912-34-56</a>
                    <div className='bottom__social'>
                        <Link className='bottom__link' to=''><img alt='img' src={img1}/></Link>
                        <Link className='bottom__link' to=''><img alt='img' src={img2}/></Link>
                        <Link className='bottom__link' to=''><img alt='img' src={img3}/></Link>
                        <Link className='bottom__link' to=''><img alt='img' src={img4}/></Link>
                    </div>
                    <p className='config'>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;