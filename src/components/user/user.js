import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import './user.scss';

import Profile from './prof/prof';
import History from './history/history';
import { getUser } from '../../redux/reducers/mobilusReducer';


const User = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(s => s.accessory.isAuth);
    const user = useSelector(s => s.accessory.loginUser.user.email); 

    console.log(user);
    return (
        <div className='user'>
            <div className='container'>
                {!isAuth && 
                    <h2>регисрация</h2>
                }
                { isAuth &&
                <Tabs className='user__tabs'>
                    <TabList className='user__tablist'>
                        <Tab className='user__tab'>История заказов</Tab>
                        <Tab className='user__tab' name='email' onSubmit={dispatch(getUser(user))}>Данные профиля</Tab>
                    </TabList>
                    <div className='user__content'>
                        <TabPanel className='user__panel'><History/></TabPanel>
                        <TabPanel className='user__panel'><Profile/></TabPanel>
                    </div>
                </Tabs>
                }
            </div>
        </div>
    )
}

export default User;