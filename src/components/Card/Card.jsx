import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader";

function Card({ addCartOnFavorite, img, name, price, id, addCartOnBasket,isLoading ,favorited = false, added = false}) {
    const [addCardOnDrawer, setAddCardOnDrawer] = React.useState(added);
    const [favoriteCart, setFavoriteCart] = React.useState(favorited)

    const addCardToState = () => {
        addCartOnBasket({id, img, name, price})
        addCartOnBasket({id, img, name, price})
        setAddCardOnDrawer(!addCardOnDrawer)
    }
    const CartOnFavorite = () => {
        addCartOnFavorite({id, img, name, price})
        setFavoriteCart(!favoriteCart)

    }

    return (

        <div className={styles.cart}>

            {isLoading ? (<ContentLoader
                speed={2}
                width={150}
                height={187}
                viewBox="0 0 150 187"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="-374" y="-107" rx="3" ry="3" width="88" height="6" />
                <rect x="-374" y="-89" rx="3" ry="3" width="52" height="6" />
                <rect x="-422" y="-59" rx="3" ry="3" width="410" height="6" />
                <rect x="-422" y="-43" rx="3" ry="3" width="380" height="6" />
                <rect x="-422" y="-27" rx="3" ry="3" width="178" height="6" />
                <circle cx="-130" cy="20" r="20" />
                <rect x="-739" y="-372" rx="0" ry="0" width="322" height="114" />
                <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
                <rect x="0" y="154" rx="8" ry="8" width="80" height="24" />
                <rect x="0" y="105" rx="4" ry="4" width="150" height="15" />
                <rect x="10" y="0" rx="10" ry="10" width="130" height="90" />
                <rect x="115" y="150" rx="9" ry="9" width="32" height="32" />
            </ContentLoader>)
                :
                (<>
                <div className={styles.favorite}>
                    <img onClick={CartOnFavorite}
                         src={favoriteCart ? "../assets/heartInSquarer.png" :
                             "../assets/disLike.png"} alt=""/>
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
                        src={
                            addCardOnDrawer ? "../assets/rexona.jpg" :
                                "../assets/plus.jpg"
                        } alt="plus"/>
                </div>
            </>)
            }



        </div>
    )
}

export default Card
