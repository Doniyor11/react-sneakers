import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const arr = [
//     {
//         name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '12 999 ',
//         imgUrl: 'images/1.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Air Max 270',
//         price: '15 999',
//         imgUrl: 'images/2.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '15 999',
//         imgUrl: 'images/3.jpg',
//     },
//     {
//         name: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: '8 999',
//         imgUrl: 'images/4.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Under Armour Curry 8',
//         price: '8 999',
//         imgUrl: 'images/5.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Kyrie 7',
//         price: '8 999',
//         imgUrl: 'images/6.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Jordan Air Jordan 11',
//         price: '8 999',
//         imgUrl: 'images/7.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike LeBron XVIII',
//         price: '8 999',
//         imgUrl: 'images/8.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Lebron XVIII Low',
//         price: '8 999',
//         imgUrl: 'images/9.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '8 999',
//         imgUrl: 'images/10.jpg',
//     },
//     {
//         name: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: '8 999',
//         imgUrl: 'images/1.jpg',
//     },
//     {
//         name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
//         price: '8 999',
//         imgUrl: 'images/1.jpg',
//     }
// ]

  
function App() {

    const [items, setItems] = React.useState([]);

    const [cartOpened, setCartOpened] = React.useState(false)

    return (
        <div className="wrapper clear pt-40">
            {cartOpened &&  <Drawer onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)} />
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
                        items.map((obj) =>
                            <Card
                                title={obj.name}
                                price={obj.price}
                                imgUrl={obj.imgUrl}
                                onFavorite={() => console.log(obj.title)}
                                onPlus={() => console.log(obj.price)}
                            />
                        )
                    }

                </div>
            </div>

        </div>
    );
}

export default App;
