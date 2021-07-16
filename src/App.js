import React from "react";
import {Route} from 'react-router-dom'
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {

    const [items, setItems] = React.useState([]);
    const [carItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/item').then((res) => {
            setItems(res.data)
        });
        axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart').then((res) => {
            setCartItems(res.data)
        });
        axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites').then((res) => {
            setFavorites(res.data)
        });

    }, []);


    const onAddCart = (obj) => {
        axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const onAdToFavorite = (obj) => {

        if (favorites.find(obj => obj.id === obj.id )){
            axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites/${obj.id}`);
            setFavorites(prev => prev.filter(item => item.id !== obj.id));
        } else {
            axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites', obj);
            setFavorites(prev => [...prev, obj]);
        }


    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickClearInputSearch = () => {
        setSearchValue('');
    }

    return (
        <div className="wrapper clear pt-40">
            {cartOpened && <Drawer items={carItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <Route path="/" exact>
                <Home
                    items={items}
                    searchValue={searchValue}
                    onClickClearInputSearch={onClickClearInputSearch}
                    onChangeSearchInput={onChangeSearchInput}
                    onAdToFavorite={onAdToFavorite}
                    onAddCart={onAddCart}
                />
            </Route>

            <Route path="/favorites" exact>
                <Favorites items={favorites} onAdToFavorite={onAdToFavorite}/>
            </Route>


        </div>
    );
}

export default App;
