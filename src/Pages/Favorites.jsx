import React from 'react'
import Card from "../components/Card/Card";



function Favorite({AddFavoriteCart,addCartOnFavorite }) {

    return(
        <div className='content p-40  '>

            <div className="title d-flex justify-between ">
                <h1>Мои закладки</h1>


            </div>

            <div className='d-flex flex-wrap'>

                {AddFavoriteCart
                    // .filter(elem => elem.name.toLowerCase().includes(changeSearch.toLowerCase()))
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