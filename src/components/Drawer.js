function Drawer({onClose, onRemove, items = [],}) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between align-center mb-30">
                    Корзина
                    <img className="cu-p" src="/images/cancel.svg" alt="" onClick={onClose}/>
                </h2>
                {
                    items.length > 0 ?
                        (<div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <div className="cartItemImg" style={{backgroundImage: `url(${obj.imgUrl})`}}/>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">
                                                {obj.title}
                                            </p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img className="remove_btn" src="/images/cancel.svg" alt=""
                                             onClick={() => onRemove(obj.id)}/>
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>15000 руб. </b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1500 руб. </b>
                                    </li>
                                </ul>
                                <button className="greenButton">
                                    Оформить заказ <img src="images/arrow.svg" alt="Arrow"/>
                                </button>
                            </div>
                        </div>)
                        : (
                            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                                <img className="mb-20" width={120} height={120} src="/images/empty-cart.jpg" alt=""/>
                                <h2>Карзинка пустая</h2>
                                <p className="opacity-6">Добавьте хотя ьы одну пару кроссовок, чтобы сделать заказ.</p>
                                <button onClick={onClose} className="greenButton">
                                    <img src="/images/arrow.svg" alt=""/>
                                    Вернуться назад
                                </button>
                            </div>
                        )}

            </div>


        </div>
    )
}

export default Drawer;