import React from 'react';
import { Link } from 'react-router-dom';
import './feedback.scss';

const Feedback = () => {
    return (
        <div className='feedback'>
            <div className='container'>
                <h2 className='title-2'>Обратная связь</h2>
                <form className='feedback__form'>
                    <div className='feedback__left'>
                        <label htnlFor='name' className='feedback__label'>Имя</label>
                        <input className='feedback__input' name='name' type='text' required/>
                        <label htnlFor='tel' className='feedback__label' placeholder='+996703313274'>Телефон</label>
                        <input className='feedback__input' name='tel' type='tel' required placeholder='+996703313274' />
                        <label htnlFor='email' className='feedback__label'>E-mail</label>
                        <input className='feedback__input' name='email' type='email' placeholder='person@gmail.com'/>
                    </div>
                    <div className='feedback__right'>
                        <p className='feedback__label'>Ваше сообщение</p>
                        <textarea className='feedback__textarea' placeholder='Ваше сообщение'></textarea>
                        <div className='feedback__btns'>
                            <Link to='/'className='feedback__btn'>Отправить</Link>
                            <p className='feedback__con'>Нажимая кнопку "Получить консультацию" я соглашаюсь с политикой конфиденциальности</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Feedback;