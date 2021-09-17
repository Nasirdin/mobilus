import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postUser } from '../../redux/reducers/mobilusReducer'


const Reg = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(postUser(
            e.target.children[1].value,
            e.target.children[3].value,
            e.target.children[5].value,
        ))
        history.push('/alert')
    }

    return (
        <div>
            <h2 className='modal__title'>регистрация</h2>
                <form action='http://localhost:3000/modal/signin' className='modal__form' onSubmit={formHandler}>
                    <label className='modal__label' for='email'>E-mail</label>
                    <input className='modal__input' name='email' type='email' required placeholder='zhaparkulov@gmail.com'/>
                    <label className='modal__label' for='userName'>Логин</label>
                    <input className='modal__input' name='userName' type='text' required placeholder='Nasirdin'/>
                    <label className='modal__label' for='password'>Пароль</label>
                    <input className='modal__input' name='password' type='password' required/>
                    <p>Уже есть аккаунт? <Link className='modal__link' to='/modal/signin'>Вход</Link></p>
                    <button className='modal__btn' type="submit">Зарегистрироваться</button>
                </form>
        </div>
    )
}

export default Reg;