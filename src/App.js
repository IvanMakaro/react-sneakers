import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import axios from "axios";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorites";
import AppContext from "../src/context"


function App() {
    const [items, setItems] = React.useState([])
    const [basketState, setBasketState] = React.useState([])
    const [favoriteCart, setFavoriteCart] = React.useState([])
    const [changeSearch, setChangeSearch] = React.useState('')
    const [openBasket, setOpenBasket] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const basketResponse = await axios.get('https://6175bffe03178d00173da9ca.mockapi.io/cart')
            const favoriteResponse = await axios.get('https://6175bffe03178d00173da9ca.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://6175bffe03178d00173da9ca.mockapi.io/items')
            setBasketState(basketResponse.data)
            setFavoriteCart(favoriteResponse.data)
            setItems(itemsResponse.data)
            setIsLoading(false)
        }

        fetchData()
    }, [])

    console.log(basketState)

    const OpenBasket = () => {
        setOpenBasket(true)
    }
    const CloseBasket = () => {
        setOpenBasket(false)
    }
    const search = (event) => {
        setChangeSearch(event.target.value)
    }

    const deleteCartOnBasket = (id) => {
        axios.delete(`https://6175bffe03178d00173da9ca.mockapi.io/cart/${id}`);
        setBasketState((prev) => prev.filter(elem => elem.id !== id))
    }


    const addCartOnBasket = async (obj) => {
        try {
            if (basketState.find((elem) => Number(elem.id) === Number(obj.id))) {
                setBasketState(prev => prev.filter(elem => Number(elem.id) !== Number(obj.id)))
                axios.delete(`https://6175bffe03178d00173da9ca.mockapi.io/cart/${obj.id}`);
            } else {
                const {data} = await axios.post('https://6175bffe03178d00173da9ca.mockapi.io/cart', obj);
                setBasketState(prev => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в корзину')
        }
    }

    const addCartOnFavorite = async (obj) => {
        try {
            if (favoriteCart.find(elem => Number(elem.id) === Number(obj.id))) {
                axios.delete(`https://6175bffe03178d00173da9ca.mockapi.io/favorites/${obj.id}`);
                setFavoriteCart((prev) => prev.filter(elem => Number(elem.id) !== Number(obj.id)))
            } else {
                const {data} = await axios.post('https://6175bffe03178d00173da9ca.mockapi.io/favorites', obj);
                setFavoriteCart(prev => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в список избранное')
        }

    }





    const isItemAdded = (id) => {
        return basketState.some((obj) => Number(obj.id) === Number(id))
    }

    return (

        <AppContext.Provider value={{items, basketState, favoriteCart, isItemAdded, addCartOnFavorite}}>

            <div className="wrapper clear">
                {
                    openBasket ?
                        <Basket
                            basketState={basketState}
                            CloseBasket={CloseBasket}
                            deleteCartOnBasket={deleteCartOnBasket}
                        /> : null
                }
                <Header OpenBasket={OpenBasket}/>

                <Route exact path='/'>
                    <Home
                        isLoading={isLoading}
                        items={items}
                        changeSearch={changeSearch}
                        search={search}
                        setChangeSearch={setChangeSearch}
                        addCartOnBasket={addCartOnBasket}

                        basketState={basketState}

                    /></Route>

                <Route path='/favorite'>

                    <Favorite

                    />
                </Route>


            </div>
        </AppContext.Provider>
    );
}

export default App;
