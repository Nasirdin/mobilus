import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux'
import { loginUser } from './redux/reducers/mobilusReducer';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Modal from './components/modal/modal';
import Alert from './components/modal/alert/alert';
import Category from './components/category/category';
import Service from './components/service/service';
import Shopping from './components/basket/basket';
import Selected from './components/selected/selected';
import Contact from './components/contact/contacts'
import Job from './components/job/job';
import User from './components/user/user';

const AppWrapper = () => {  
    return (
      <Provider store={store}>
        <App /> 
      </Provider>
    )
  }


const App = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('userToken'))
    const auth = () => {
        if (user === null) {
            console.log('пользователь не найден');
        }else if (user !== null) {
            const userName = user.userName
            const password = user.password
            dispatch(loginUser(
                userName,
                password
            ))
        } else {
            console.log('ошибка');
        }
    }
    auth()
    return (
        <div className='app'>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path='/modal' component={Modal}/>
                        <Route path='/alert' component={Alert}/>
                    </Switch>
                    <Switch>
                        <Route exact path='/' component={() => <Home/>}/>
                        <Route exect path='/category' component={() => <Category/>}/>
                        <Route exect path='/service' component={() => <Service/>}/>
                        <Route execr path='/shopping' component={() => <Shopping/>}/>
                        <Route execr path='/selected' component={() => <Selected/>}/>
                        <Route execr path='/contacts' component={() => <Contact/>}/>
                        <Route exect path='/job' component={() => <Job/>}/>
                        <Route execr path='/user' component={() => <User/>}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
        </div>
    )
}

export default AppWrapper;