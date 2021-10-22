import './App.css';

function App() {
    return (
        <div className="wrapper clear">
            <header className='d-flex justify-between align-center p-45'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/assets/logo.png'/>
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>


                <ul className='d-flex '>
                    <li>
                        <img width={18} height={18} src='/assets/cart.svg'/>
                        <span>1203 руб</span>
                    </li>
                    <li>
                        <img className='mr-35 ml-30' width={18} height={18} src='/assets/heart.svg'/>
                        <img className='mr-18' width={20} height={18} src='/assets/user.svg'/>
                    </li>
                </ul>

            </header>

            <div className='content p-40 '>
                <h1>Все кроссовки</h1>
                <div className='d-flex'>
                    <div className="cart">
                        <img width={133} height={112} src="/assets/sneakers/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='cu-p' width={32} height={32} src="/assets/plus.jpg" alt="plus"/>
                        </div>
                    </div>

                    <div className="cart">
                        <img width={133} height={112} src="/assets/sneakers/2.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='cu-p' width={32} height={32} src="/assets/plus.jpg" alt="plus"/>
                        </div>
                    </div>

                    <div className="cart">
                        <img width={133} height={112} src="/assets/sneakers/3.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='cu-p' width={32} height={32} src="/assets/plus.jpg" alt="plus"/>
                        </div>
                    </div>
                    <div className="cart">
                        <img width={133} height={112} src="/assets/sneakers/4.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='cu-p' width={32} height={32} src="/assets/plus.jpg" alt="plus"/>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default App;
