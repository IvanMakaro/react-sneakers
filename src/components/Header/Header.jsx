import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

function Header({OpenBasket}) {
    return (
        <header className='d-flex justify-between align-center p-45'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/assets/logo.png' alt='logo'/>
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex '>
                <li onClick={OpenBasket} className='cu-p'>
                    <img width={18} height={18} src='/assets/cart.svg' alt='logo'/>
                    <span>1203 руб</span>
                </li>
                <li>
                    <Link to='/favorite'>
                        <img className='mr-35 ml-30' width={18} height={18} src='/assets/heart.svg' alt='logo'/>
                    </Link>
                    <img className='mr-18' width={20} height={18} src='/assets/user.svg' alt='logo'/>
                </li>
            </ul>

        </header>
    )
}

export default Header
