import React from 'react'
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import axios from "axios";


function App() {
    const [items, setItems] = React.useState([])
    const [basketState, setBasketState] = React.useState([])
    const [changeSearch, setChangeSearch] = React.useState('')
    const [openBasket, setOpenBasket] = React.useState(false)


    const OpenBasket = () => {
        setOpenBasket(true)
    }
    const CloseBasket = () => {
        setOpenBasket(false)
    }
    const AddCartOnState = (obj) => {
        axios.post('https://6175bffe03178d00173da9ca.mockapi.io/cart',obj);


        setBasketState(prev => [...prev, obj])
    }
    const Search = (event) => {
        setChangeSearch(event.target.value)
    }


    React.useEffect(() => {
        axios.get('https://6175bffe03178d00173da9ca.mockapi.io/items')
            .then(res => setItems(res.data))
        axios.get('https://6175bffe03178d00173da9ca.mockapi.io/cart')
            .then(res => setBasketState(res.data) )
    }, [])

    return (
        <div className="wrapper clear">

            <Header OpenBasket={OpenBasket}/>

            {openBasket ? <Basket basketState={basketState} CloseBasket={CloseBasket}/> : null}

            <div className='content p-40  '>

                <div className="title d-flex justify-between ">
                    <h1>{changeSearch ? `Вы ищите: ${changeSearch}` : 'Все кроссовки'}</h1>


                    <div className="input">
                        <img src="/assets/search.png" alt="search"/>
                        <input onChange={Search} value={changeSearch} type="text" placeholder='Поиск...'/>
                        {changeSearch && <img onClick={() => {
                            setChangeSearch('')
                        }} className='removeBtn' src="/assets/cross.svg" alt="#"/>}


                    </div>
                </div>
                <div className='d-flex flex-wrap'>

                    {items
                        .filter(elem => elem.name.toLowerCase().includes(changeSearch.toLowerCase()))
                        .map((elem, index) =>

                        <Card
                            key={index}
                            name={elem.name}
                            price={elem.price}
                            img={elem.img}
                            AddCartOnState={(obj) => AddCartOnState(obj)}
                            onFavorite={console.log()}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default App;
