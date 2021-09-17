import React from 'react';
import { Link } from 'react-router-dom';

const Errorlogin = () => {
    return (
        <div>
            <div className='error'>
                <p className='error__text'>Пользователь с таким логином уже существует</p>
                <Link className='error__btn' to='/modal'>Назад</Link>
            </div>
        </div>
    )
}

export default Errorlogin;