import React from 'react';

import Img1 from './img1.svg';
import Img2 from './img2.svg';
import Img3 from './img3.svg';

import './level.scss'

const Level = () => {
    return (
        <div className='level'>
            <div className='container'>
                <h2 className='title'>Как мы сохраняем высокий уровень сервиса?</h2>
                <ul className='level__content'>
                <li className='level__box'>
                        <div className='level__first'>
                            <img className='level__img' src={Img1} alt='level img'/>
                            <h3 className='level__title'>Тщательно выбираем поставщиков</h3>
                        </div>
                        <p className='level__text'>
                        Мы являемся поставщиками самых качественных и разнообразных товаров от проверенных производителей со всего мира.
                        </p>
                    </li>
                    <li className='level__box'>
                        <div className='level__first'>
                            <img className='level__img' src={Img2} alt='level img'/>
                            <h3 className='level__title'>С умом формируем ассортимент</h3>
                        </div>
                        <p className='level__text'>
                        В наличии — более чем 5000 различных наименований цифровых продуктов, а также всевозможные аксессуары 
                        </p>
                    </li>
                    <li className='level__box'>
                        <div className='level__first'>
                            <img className='level__img' src={Img3} alt='level img'/>
                            <h3 className='level__title'>Сотрудничаем с лучшими на рынке</h3>
                        </div>
                        <p className='level__text'>
                        Вас приятно удивят наши цены и возможность приобрести некоторые виды продукции оптом. 
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Level;