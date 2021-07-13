import styles from './Card.module.scss'
import React from "react";


function Card({title, imgUrl, price, onFavorite, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIFavorite] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, imgUrl, price,});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/images/heart1.svg" : "/images/heart.svg"} alt="Like"/>
            </div>
            <img width="133" height="112" src={imgUrl} alt=""/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} src={isAdded ? "/images/btnchecked.svg" : "/images/btnunchecked.svg"}
                     alt="" onClick={onClickPlus}/>
            </div>
        </div>
    )
}

export default Card;
