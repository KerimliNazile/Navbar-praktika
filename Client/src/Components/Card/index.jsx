import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import './index.scss'
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';

const Card = ({ text, price, product,id }) => {
    const { addBasket } = useContext(BasketContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardText">
                    <h1>{text}</h1>
                </div>
                <div className="CardPrice">
                    <p>{price}</p>
                </div>
                <div className="CardIcon">
                    <div><Link to={`/${id}`}><FaEye /></Link></div>
                    <FaHeart />
                    <div onClick={() => addBasket(product)}>  <RiShoppingBasketLine /></div>
                </div>
            </div>
        </>
    )
}

export default Card