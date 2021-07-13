import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

    const [items, setItems] = React.useState([]);
    const [carItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/item').then((res) => {
            setItems(res.data)
        });
        axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart').then((res) => {
            setCartItems(res.data)
        });

    }, []);


    const onAddCart = (obj) => {
        axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }

    const onRemoveItem = (id) =>{
        axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const OnClickClearInputSearch = () => {
        setSearchValue('');
    }

    return (
        <div className="wrapper clear pt-40">
            {cartOpened && <Drawer items={carItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block d-flex">
                        <img src="/images/search.svg" alt="search"/>
                        {searchValue &&
                        <img onClick={OnClickClearInputSearch} className="cu-p clear" src="/images/cancel.svg" alt=""/>}
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="d-flex justify-between flex-wrap">
                    {
                        items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>
                            <Card
                                key={index}
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
