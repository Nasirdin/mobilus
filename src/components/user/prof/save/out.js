import React from 'react';
import { useDispatch } from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { outUser } from '../../../../redux/reducers/mobilusReducer';
import { useHistory } from 'react-router';

const Out = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handler = (e) => {
        e.preventDefault();
        dispatch(outUser());
        localStorage.removeItem('userToken')
        history.push('/')
    }
    return (
        <div>
            <button className='save__out' onClick={handler} to='/'>Выход<FontAwesomeIcon className='save__arrow' icon={faArrowRight}/></button>
        </div>
    )
}

export default Out;