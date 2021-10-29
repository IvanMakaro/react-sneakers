import React from 'react'
// import styles from './Header.module.scss'

function Header({OpenBasket}) {
    return (
        <header className='d-flex justify-between align-center p-45'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src='/assets/logo.png' alt='logo'/>
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='d-flex '>
                <li onClick={OpenBasket} className='cu-p'>
                    <img width={18} height={18} src='/assets/cart.svg' alt='logo'/>
                    <span>1203 руб</span>
                </li>
                <li>
                    <img className='mr-35 ml-30' width={18} height={18} src='/assets/heart.svg' alt='logo' />
                    <img className='mr-18' width={20} height={18} src='/assets/user.svg' alt='logo'/>
                </li>
            </ul>

        </header>
    )
}

export default Header
