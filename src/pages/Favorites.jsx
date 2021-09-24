import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Favorites({onAdToFavorite}) {

    const {favorites} = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1 className="">Мои закладки</h1>
            </div>
            <div className="d-flex justify-between flex-wrap">
                {
                    favorites.map((item, index) =>
                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAdToFavorite}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites;