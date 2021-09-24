import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../context";

function Home({
                  items,
                  searchValue,
                  onChangeSearchInput,
                  onClickClearInputSearch,
                  onAdToFavorite,
                  onAddCart,
                  isLoading
              }) {

    const {isItemAdded} = React.useContext(AppContext);

    const renderItems = () => {

        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );

        return (isLoading ? [...Array(8)] : filtredItems)
            .map((item, index) =>
                <Card
                    key={index}
                    onFavorite={(obj) => onAdToFavorite(obj)}
                    onPlus={(obj) => onAddCart(obj)}
                    added={isItemAdded(item && item.id)}
                    loading={isLoading}
                    {...item}
                />
            )
    };

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/images/search.svg" alt="search"/>
                    {searchValue &&
                    <img onClick={onClickClearInputSearch} className="cu-p clear" src="/images/cancel.svg" alt=""/>}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск"/>
                </div>
            </div>
            <div className="d-flex justify-between flex-wrap">
                {
                    renderItems(

                    )
                }
            </div>
        </div>
    )
}

export default Home;