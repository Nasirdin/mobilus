import React from 'react';
import Errorlogin from './errLogin';
import Great from './great'
import { useSelector } from 'react-redux';

import './alert.scss'
import Erroremail from './errorEmail';

const Alert = () => {
    const userPost = useSelector(s => s.accessory.postUser)
    const alert = () => {
        if(userPost === 'greate') {
            return (<Great/>)
        } else if (userPost === 'error email') {
            return (<Errorlogin/>)
        } else if (userPost === 'error login') {
            return (<Erroremail/>)
        }
    }
    return (
        <div className='alert'>
            {
                alert()
            }
        </div>
    )
}

export default Alert;