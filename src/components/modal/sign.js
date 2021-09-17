import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/reducers/mobilusReducer'

const Sign = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(
            e.target.children[1].value,
            e.target.children[3].value
        ))
        history.push('/')
    };
    

    return (
        <div>
            <h2 className='modal__title'>Вход</h2>
                <form className='modal__form' onSubmit={formHandler}>
                    <label className='modal__label' for='userName'>Имя пользователя</label>
                    <input className='modal__input' name='userName' type='text' required placeholder='Nasirdin'/>
                    <label className='modal__label' for='password'>Пароль</label>
                    <input className='modal__input' name='password' type='password' required/>
                    <p>Нет аккаунта? <Link to='/modal'>Вы можете зарегистрироваться</Link></p>
                    <button className='modal__btn' type="submit">Вход</button>
                </form>
        </div>
    )
}

export default Sign;