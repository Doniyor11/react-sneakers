import Card from "../components/Card/Card";

function Home({items, searchValue, onChangeSearchInput, onClickClearInputSearch, onAdToFavorite, onAddCart}) {
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
                    items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>
                        <Card
                            key={index}
                            onFavorite={(obj) => onAdToFavorite(obj)}
                            onPlus={(obj) => onAddCart(obj)}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home;