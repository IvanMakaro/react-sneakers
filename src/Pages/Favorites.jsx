import React from 'react'
import Card from "../components/Card/Card";
import AppContext from "../context";



function Favorite({addCartOnFavorite}) {
const state = React.useContext(AppContext)

    return(
        <div className='content p-40  '>

            <div className="title d-flex justify-between ">
                <h1>Мои закладки</h1>


            </div>

            <div className='d-flex flex-wrap'>

                {state.favoriteCart
                    .map((elem, index) =>

                        <Card
                            key={index}
                            favorited={true}
                            addCartOnFavorite={(obj) => addCartOnFavorite(obj)}
                            {...elem}
                        />)}

            </div>
        </div>
    )
}
export default Favorite