import React from 'react';
// import {TabList, Tab, Tabs, TabPanel} from 'react-tabs'
import { Carousel } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import newimg1 from './new1.svg'
import newimg2 from './new2.svg'
import newimg3 from './new3.svg'
import newimg4 from './new4.svg'
// import { faCartArrowDown, faChartBar, faHeart } from '@fortawesome/free-solid-svg-icons';

import './new.scss'

const New = () => {
    return (
        <div className='new'>
            <div className='container'> 
            <div className='new__tab'>
                
                    <h2 className='title'>Новинки</h2>
                    <Carousel className='new__slider'>
                        <Carousel.Item className='new__cards'>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg1}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg2}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg3}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg4}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='new__cards'>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg3}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg2}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg4}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg1}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='new__cards'>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg2}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg1}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg4}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                            <div className='card'>
                                <img className='card__img' alt='img'  src={newimg3}/>
                                <h3 className='card__title'>Колонка Soundmaster Bass pro 20 вт</h3>
                                <p className='card__subtitle'>Cиликоновый чехол для iPhone SE/8/7 Lightweight Case</p>
                                <div className='card__info-block'>
                                    <div className='card__price'>
                                        <p className='card__old-price'>2700</p>
                                        <p className='card__new-price'>2500</p>
                                    </div>
                                    {/* <FontAwesomeIcon className='card__icon' icon={faChartBar}/>
                                    <FontAwesomeIcon className='card__icon' icon={faHeart}/>
                                    <FontAwesomeIcon className='card__icon cart' icon={faCartArrowDown}/> */}
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                
            </div>
            </div>
        </div>
    )
}

export default New;