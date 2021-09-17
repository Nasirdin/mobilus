import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul className='class-nav nav'>
                <li className='nav__item'><Link to='/'>Huawei <span>42</span></Link></li>
                <li className='nav__item'><Link to='/'>Iphone <span>31</span></Link></li>
                <li className='nav__item'><Link to='/'>Samsung <span>22</span></Link></li>
                <li className='nav__item'><Link to='/'>Xiaomi <span>44</span></Link></li>
                <li className='nav__item'><Link to='/'>Redmi <span>10</span></Link></li>
                <li className='nav__item'><Link to='/'>Honor <span>12</span></Link></li>
                <li className='nav__item'><Link to='/'>Meizu <span>11</span></Link></li>
                <li className='nav__item'><Link to='/'>ZTE <span>43</span></Link></li>
                <li className='nav__item'><Link to='/'>Другие <span>59</span></Link></li>
            </ul>
        </div>
    )
}

export default Nav;