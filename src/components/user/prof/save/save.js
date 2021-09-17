import React from 'react';
import {  useSelector } from 'react-redux';
import Out from './out';
import './save.scss';

const Save = () => {
    const user = useSelector(s => s.accessory.loginUser.user);

    return (
        <div className='save'>
            <h3 className='save__title'>Данные пользователя</h3>
            <div className='save__content'>
                <p className='save__name'>Имя пользователя: <span>{user.userName}</span></p>
                <p className='save__name'>E-mail: <span>{user.email}</span></p>
                <Out/>
            </div>
        </div>
    )
}

export default Save;