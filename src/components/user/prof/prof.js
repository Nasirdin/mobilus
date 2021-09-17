import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Save from './save/save';
import Update from './update/update';

const Profile = () => {

    // const save = () => {
    //     if() {

    //     }
    // }

    return (
        <div className='profile'>
            <Switch>
                <Route exact path='/user' component={Save}/>
                <Route path='/user/update' component={Update}/>
            </Switch>
        </div>
    )
}

export default Profile;