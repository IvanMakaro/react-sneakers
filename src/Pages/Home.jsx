import React from 'react'
import Card from "../components/Card/Card";



function Home({
                  isLoading,
                  items,
                  changeSearch,
                  search,
                  setChangeSearch,
                  addCartOnBasket,
                  addCartOnFavorite,

              }) {



    const renderItems = () => {
        const filteredItems = items.filter((elem) =>
            elem.name.toLowerCase().includes(changeSearch.toLowerCase())
        );

        return (isLoading ? [...Array(7)] : filteredItems).map((elem, index) => (

            <Card
                isLoading={isLoading}
                key={index}
                addCartOnBasket={(obj) => addCartOnBasket(obj)}
                addCartOnFavorite={(obj) => addCartOnFavorite(obj)}
                {...elem}
            />
        ));
    }


    return (
        <div className='content p-40  '>

            <div className="title d-flex justify-between ">
                <h1>{changeSearch ? `Вы ищите: ${changeSearch}` : 'Все кроссовки'}</h1>


                <div className="input">
                    <img src="/assets/search.png" alt="search"/>
                    <input onChange={search} value={changeSearch} type="text" placeholder='Поиск...'/>
                    {changeSearch && <img onClick={() => {
                        setChangeSearch('')
                    }} className='removeBtn' src="/assets/cross.svg" alt="#"/>}


                </div>
            </div>
            <div className='d-flex flex-wrap'>


                {renderItems()}
            </div>
        </div>
    )
}

export default Home