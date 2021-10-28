import React from 'react'
import styles from './Basket.module.scss'

function Basket({onCloseCart, items = []}) {
    return (
        <div className={styles.overlay}>

            <div className={styles.drawerBlock}>
                <h2>Корзина
                    <img onClick={onCloseCart} className={styles.removeBtn} src="/assets/cross.svg" alt="#"/>
                </h2>

                <div className={styles.items}>
                    {
                        items.map((elem)=>(
                            <div className={styles.cartItem}>
                                <div className={styles.cartItemImg}>
                                    <img width={70} height={70} src={elem.img} alt="#"/>
                                </div>
                                <div className='p-span'>
                                    <p>{elem.name}</p>
                                    <span>{elem.price} руб</span>
                                </div>
                                <img className={styles.removeBtn} src="/assets/cross.svg" alt="#"/>
                            </div>
                        ))
                    }





                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>

                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>Оформить заказ <img src="/assets/vector.svg" alt=""/></button>
                </div>
            </div>
        </div>
    )
}

export default Basket
