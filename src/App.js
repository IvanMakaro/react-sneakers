import React from 'react'
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";

function App() {
    const [items, setItems] = React.useState([])
    const [card, setCard] = React.useState([])
    const [openBasket, setOpenBasket] = React.useState(false)
    const [changeSearch,setChangeSearch] = React.useState('')

    const OpenBasket = () => {
        setOpenBasket(true)
    }
    const CloseBasket = () => {
        setOpenBasket(false)
    }
    const AddCartOnState = (obj) => {
        setItems(prev => [...prev, obj])
    }
    const Search = (event)=>{
        setChangeSearch(event.target.value)
    }


    React.useEffect(() => {
        fetch('https://6175bffe03178d00173da9ca.mockapi.io/items')
            .then(res => res.json())
            .then(json => setCard(json))
    }, [])

    return (
        <div className="wrapper clear">

            <Header OpenBasket={OpenBasket}/>

            {openBasket ? <Basket items={items} CloseBasket={CloseBasket}/> : null}

            <div className='content p-40  '>

                <div className="title d-flex justify-between ">
                     <h1>{changeSearch ?`Вы ищите: ${changeSearch}`: 'Все кроссовки'}</h1>




                    <div className="input">
                        <img src="/assets/search.png" alt="search"/>
                        <input onChange={Search} value={Search} type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>

                    {card.map((elem, index) =>
                        <Card
                            key={index}
                            name={elem.name}
                            price={elem.price}
                            img={elem.img}
                            onPlus={(obj) => AddCartOnState(obj)}
                            onFavorite={console.log()}
                        />)}


                </div>
            </div>
        </div>
    );
}

export default App;
