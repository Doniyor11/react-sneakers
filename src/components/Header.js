function Header(props){
    return(
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
                    <li className="mr-30 d-flex align-center cu-p" onClick={props.onClickCart}>
                        <img className="mr-10" src="/images/karzinka.svg" alt=""/>
                        <span>1250 рубл.</span>
                    </li>
                    <li>
                        <img src="/images/user.svg" alt=""/>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;