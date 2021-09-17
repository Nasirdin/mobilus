import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import './modal.scss'
import Reg from './reg';
import Sign from './sign';

const Modal = () => {
    const isAuth = useSelector(s => s.accessory.isAuth) 
    return (
        <div>
            {!isAuth &&
            <div className='modal'>
                <div className='modal__block'>
                    <Link className='out' to='/'></Link>
                    <Switch>
                        <Route exact path='/modal' component={Reg}/>
                        <Route path='/modal/signin' component={Sign}/>
                    </Switch>
                </div> 
            </div>
            }

        </div>
    )
}

export default Modal;