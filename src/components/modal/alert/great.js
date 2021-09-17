import React from 'react';
import { Link } from 'react-router-dom';

const Great = () => {
    return (
        <div className='great'>
            <p className='great__text'>Вы успешно зарегистрированы</p>
            <Link className='great__btn' to='/modal/signin'>Войти</Link>
        </div>
    )
}

export default Great;