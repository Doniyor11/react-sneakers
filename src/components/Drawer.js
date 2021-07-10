function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/images/cancel.svg" alt="" onClick={props.onClose}/>
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
    )
}

export default Drawer;