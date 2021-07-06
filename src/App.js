function App() {
    return (
        <div className="wrapper clear mt-40">
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
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/plus.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/plus.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/plus.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width="133" height="112" src="/images/1.jpg" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="/images/plus.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
