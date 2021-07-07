function App() {
    return (
        <div className="wrapper clear pt-40">

            <div className="overlay">
                <div className="drawer d-flex flex-column">
                    <h2 className="d-flex justify-between align-centermb-30">
                        Корзина
                        <img className="cu-p" src="/images/cancel.svg" alt=""/>
                    </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{backgroundImage: 'url(/images/1.jpg)'}}/>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="remove_btn" src="/images/cancel.svg" alt=""/>
                        </div>

                        <div className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{backgroundImage: 'url(/images/1.jpg)'}}/>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="remove_btn" src="/images/cancel.svg" alt=""/>
                        </div>

                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итога:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>

                        <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt=""/></button>
                    </div>


                </div>
            </div>


            <header className="d-flex justify-between align-center p-40">
                <div className="headerLeft d-flex align-center justify-center">
                    <img src="/images/logo.png" alt=""/>
                    <div className="headerInfo ml-15">
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="headerRight">
                    <ul className="d-flex">
                        <li className="mr-30 d-flex align-center">
                            <img className="mr-10" src="/images/karzinka.svg" alt=""/>
                            <span>1250 рубл.</span>
                        </li>
                        <li>
                            <img src="/images/user.svg" alt=""/>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/images/search.svg" alt="seatch"/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="d-flex justify-between">

                    <div className="card">
                        <div className="favorite">
                            <img src="/images/heart.svg" alt=""/>
                        </div>
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/btnunchecked.svg" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/images/heart.svg" alt=""/>
                        </div>
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/btnunchecked.svg" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/images/heart.svg" alt=""/>
                        </div>
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/btnunchecked.svg" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/images/heart.svg" alt=""/>
                        </div>
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/btnunchecked.svg" alt=""/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
