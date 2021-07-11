function Drawer({onClose, items = [],}) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/images/cancel.svg" alt="" onClick={onClose}/>
                </h2>

                <div className="items">

                    {
                        items.map((obj) =>(
                            <div className="cartItem d-flex align-center mb-20">
                                <div className="cartItemImg" style={{backgroundImage: `url({${obj.imageURL})`}}/>
                                <div className="mr-20 flex">
                                    <p className="mb-5">
                                        {obj.title}
                                    </p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className="remove_btn" src="/images/cancel.svg" alt=""/>
                            </div>
                        ))
                    }

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