import React from 'react'
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";

function App() {

    const [card, setCard] = React.useState([])
    const [openBasket, setOpenBasket] = React.useState(false)

  const onClickBasket=()=>{
      setOpenBasket(true)
  }



    React.useEffect(() => {
        fetch('https://6175bffe03178d00173da9ca.mockapi.io/items')
            .then(res => res.json())
            .then(json => setCard(json))
    }, [])

    return (
        <div className="wrapper clear">


            <Header onClickBasket={onClickBasket}/>

            { openBasket ? <Basket/> : null}


            <div className='content p-40 '>
                <h1>Все кроссовки</h1>
                <div className='d-flex '>


                    {card.map((elem, index) =>
                        <Card
                            key={index}
                            name={elem.name}
                            price={elem.price}
                            img={elem.img}

                        />)}


                </div>
            </div>
        </div>
    );
}

export default App;
