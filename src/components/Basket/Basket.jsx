import React from 'react'
import styles from './Basket.module.scss'

function Basket({CloseBasket, basketState = []}) {
    return (
        <div className={styles.overlay}>

            <div className={styles.drawerBlock}>
                <h2>Корзина
                    <img onClick={CloseBasket} className={styles.removeBtn } src="/assets/cross.svg" alt="#"/>
                </h2>

                <div className={styles.items}>

                    { basketState.map((elem)=>(
                            <div className={styles.cartItem}>
                                <div className={styles.cartItemImg}>
                                    <img width={70} height={70} src={elem.img} alt="#"/>
                                </div>
                                <div className={styles.p_span}>
                                    <p>{elem.name}</p>
                                    <span>{elem.price} руб</span>
                                </div>
                                <img className={styles.removeBtn} src="/assets/cross.svg" alt="#"/>
                            </div>
                        ))}

                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className='d-flex '>
                            <p className={styles.p}>Итого: </p>
                            <div className={styles.dashed}></div>
                            <span className={styles.span}>21 498 руб. </span>
                        </li>

                        <li className='d-flex '>
                            <p className={styles.p}  >Налог 5%: </p>
                            <div className={styles.dashed}></div>
                            <span className={styles.span}>1074 руб. </span>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>Оформить заказ <img src="/assets/vector.svg" alt=""/></button>
                </div>
            </div>
        </div>
    )
}

export default Basket
