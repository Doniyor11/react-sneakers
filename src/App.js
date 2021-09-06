import React from "react";
import {Route} from 'react-router-dom'
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./context";


function App() {

    const [items, setItems] = React.useState([]);
    const [carItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart');
            const favoritesResponse = await axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites');
            const itemsResponse = await axios.get('https://60ea98475dd7ff0017b397b9.mockapi.io/item');

            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const onAddCart = (obj) => {
        if (carItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart/${obj.id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart', obj);
            setCartItems(prev => [...prev, obj]);
        }
        // axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart', obj);
        // setCartItems(prev => [...prev, obj]);
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/cart/${id}`);
        setCartItems(prev => prev.filter((item) => item.id !== id));
    }

    const onAdToFavorite = async (obj) => {
        try {
            if (favorites.find((Favobj) => Favobj.id === obj.id)) {
                axios.delete(`https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites/${obj.id}`);
                // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const {data} = await axios.post('https://60ea98475dd7ff0017b397b9.mockapi.io/items/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалос добавить в фаворить');
        }

    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickClearInputSearch = () => {
        setSearchValue('');
    }

    return (
        <AppContext.Provider value={{items, carItems, favorites,}}>
            <div className="wrapper clear pt-40">
                {cartOpened && <Drawer items={carItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
                <Header onClickCart={() => setCartOpened(true)}/>
                <Route path="/" exact>
                    <Home
                        items={items}
                        cartItems={carItems}
                        searchValue={searchValue}
                        onClickClearInputSearch={onClickClearInputSearch}
                        onChangeSearchInput={onChangeSearchInput}
                        onAdToFavorite={onAdToFavorite}
                        onAddCart={onAddCart}
                        isLoading={isLoading}
                    />
                </Route>

                <Route path="/favorites" exact>
                    <Favorites onAdToFavorite={onAdToFavorite}/>
                </Route>


            </div>
        </AppContext.Provider>
    );
}

export default App;
