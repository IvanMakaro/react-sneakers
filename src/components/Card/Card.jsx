import React from 'react'
import styles from './Card.module.scss'

function Card({onFavorite, img, name, price, AddCartOnState}) {

    const [addCardOnDrawer, setAddCardOnDrawer] = React.useState(false);

    const addCardToState = () => {
        AddCartOnState({img, name, price})
        setAddCardOnDrawer(!addCardOnDrawer)
    }


    return (
        <div className={styles.cart}>

            <div className={styles.favorite}>
                <img onClick={onFavorite} src="/assets/disLike.png" alt=""/>
            </div>
            <img width={133} height={112} src={img} alt=""/>
            <h5>{name}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <img
                    onClick={addCardToState}
                    className={styles.plusImg} width={32} height={32}
                    src={addCardOnDrawer ? "../assets/rexona.jpg" : "../assets/plus.jpg"} alt="plus"/>
            </div>
        </div>
    )
}

export default Card
