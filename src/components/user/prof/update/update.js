import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './update.scss';
import { updateUser } from '../../../../redux/reducers/mobilusReducer';
const Update = () => {
    const history = useHistory();
    const user = useSelector(s => s.accessory.loginUser.user); 
    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser(
            e.target.children[1].value,
            e.target.children[3].value,
            e.target.children[5].value,
            e.target.children[7].value,
            e.target.children[9].value,
            e.target.children[11].value,
            e.target.children[13].value,
            e.target.children[15].value,
            e.target.children[17].value,
            e.target.children[19].value,
            e.target.children[20].value
        ))
        history.push('/user/save')
    }
    return (
        <div className='update'>
            <h3 className='update__title'>Управление аккаунтом</h3>
            <form className='update__form' onSubmit={formHandler}>
                <label className='update__label' htmlFor='lastname'>Фамилия</label>
                <input className='update__input' name='lastname' type='text' required placeholder='Фамилия'/>
                <label className='update__label' htmlFor='name'>Имя</label>
                <input className='update__input' name='name' type='text' required placeholder='Имя'/>
                <label className='update__label' htmlFor='userName'>Username</label>
                <input className='update__input' name='userName' type='text' required value={user.userName}/>
                <label className='update__label' htmlFor='email'>E-mail</label>
                <input className='update__input' name='email' type='email' required value={user.email}/>
                <label className='update__label' htmlFor='telephone'>Телефон</label>
                <input className='update__input' name='telephone' type='tel' required placeholder='+996777777777'/>
                <label className='update__label' htmlFor='city'>Область</label>
                <input className='update__input' name='city' type='text' required placeholder='Область'/>
                <label className='update__label' htmlFor='area'>Район</label>
                <input className='update__input' name='area' type='text' required placeholder='Район'/>
                <label className='update__label' htmlFor='street'>Улица</label>
                <input className='update__input' name='street' type='text' required placeholder='Улица'/>
                <label className='update__label' htmlFor='home'>Дом</label>
                <input className='update__input' name='home' type='text' required placeholder='Дом'/>
                <label className='update__label' htmlFor='apartament'>Квартира</label>
                <input className='update__input' name='apartament' type='text' placeholder='Квартира'/>
                <input type='text' style={{display: 'none'}} name='id' value={user._id}/>
                <button className='update__btn' type='submit' to='/user/save'>Сохранить</button>
            </form>
        </div>
    )
}

export default Update;