import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

    const [items, setItems] = React.useState([]);
    const [carItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://60ea98475dd7ff0017b397b9.mockapi.io/item').then(res => {
            return res.json();
        }).then(json => {
            setItems(json)
        });
    }, []);


    const onAddCart = (obj) =>{
        setCartItems(prev => [...prev, obj]);
    }

    return (
        <div className="wrapper clear pt-40">
            {cartOpened && <Drawer items={carItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/images/search.svg" alt="seatch"/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="d-flex justify-between flex-wrap">


                    {
                        items.map((item) =>
                            <Card
                                title={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() => console.log(item.title)}
                                onPlus={(obj) => onAddCart(obj)}
                            />
                        )
                    }

                </div>
            </div>

        </div>
    );
}

export default App;
