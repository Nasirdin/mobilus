import React from 'react';
import Icon1 from './img1.svg';
import Icon2 from './img2.svg';
import Icon3 from './img3.svg';
import Icon4 from './img4.svg';
import Icon5 from './img5.svg';
import './service.scss';

const Service = () => {

    return (
        <div className='service'>
                <div className='service-header'>
                    <div className='container'>
                        <h2 className='service-header__title-3'>Сервисный центр</h2>
                        <p className='service-header__subtitle'>Качественные комплектующие на популярные <br/> модели всегда в наличии. Не надо ждать!</p>
                    </div>
                </div>
                <div className='service-content'>
                    <div className='container'>
                        <div className='service-content__block-1'>
                            <p className='service-content__text'>Быстро изготовим ключи, печати, сделаем фото <br/> на документы и поможем со сканированием <br/> и распечаткой документов</p>
                            <div className='service-content__link'><p>Адрес <br/> точек</p> <img className='service-content__img-1' src={Icon1} alt='img'/></div>
                        </div>
                        <div className='service-content__block-2'>
                            <h3 className='service-content__title'>Ремонт телефонов и ноутбуков</h3>
                            <ul className='service-content__items'>
                                <li className='service-content__item'>
                                    <img src={Icon2} alt='img-img'/>
                                    <h3>Дисплеи</h3>
                                    <p>Оригинальная сочность и качество изображения, оригинальная яркость и четкость цветопередачи, оригинальная чувствительность Touchscreen.</p>
                                </li>
                                <li className='service-content__item'>
                                    <img src={Icon3} alt='img-img'/>
                                    <h3>Шлейфы</h3>
                                    <p>Электронные компоненты (камеры, разъемы зарядки, микрофоны) на шлейфах полностью соответствуют стандартам производителей</p>
                                </li>
                                <li className='service-content__item'>
                                    <img src={Icon4} alt='img-img'/>
                                    <h3>Кнопки</h3>
                                    <p>Износостойкие кнопки из материалов оригинального производства. Наши кнопки не вызывают аллергии и выполнени из экологичного пластика</p>
                                </li>
                                <li className='service-content__item'>
                                    <img src={Icon5} alt='img-img'/>
                                    <h3>Аккумуляторы</h3>
                                    <p>От производителей, обеспечивающих более 1000 циклов заряда/разряда. Каждая батарея проходит дополнительный контроль разряда и заряда</p>
                                </li>
                            </ul>
                        </div>
                        <div className='service-content__block-3'>
                            <p>Вызовите курьера за 399 р, сэкономьте <br/> время а мы проведем ремонт за 1 день!</p>
                            <ul>
                                <li><button type='submit'>Оставить заявку</button></li>
                                <li>+7 (921) 912-34-56</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Service;


// https://docs.google.com/document/d/1Qv_WKHj5jPmP0yDFYtbhfUz8Yf3YutgsJtUtapVHAH8/edit