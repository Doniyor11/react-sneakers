import styles from './Card.module.scss'
import React from "react";


function Card(props){

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () =>{
        setIsAdded(!isAdded)
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}  onClick={props.onFavorite}>
                <img src="/images/heart.svg" alt=""/>
            </div>
            <img width="133" height="112" src={props.imgUrl} alt=""/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={styles.plus} src={isAdded ? "/images/btnchecked.svg" : "/images/btnunchecked.svg"} alt="" onClick={onClickPlus}/>
            </div>
        </div>
    )
}

export default Card;
