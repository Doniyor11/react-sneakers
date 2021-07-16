import Card from "../components/Card/Card";

function Favorites({items, onAdToFavorite}) {
    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1 className="">Мои закладки</h1>
            </div>
            <div className="d-flex justify-between flex-wrap">
                {
                    items.map((item, index) =>
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            favorited={true}
                            onFavorite={onAdToFavorite}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites;