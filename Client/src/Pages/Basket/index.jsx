import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
  const { basket, deleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <h1>Basket</h1>
      <div className="Basket">
        {basket && basket.map(x =>
          <ul>
            <li>{x.text}</li>
            <li>{x.price}</li>
            <li><button onClick={() => deleteBasket(x)}>Delete</button></li>

            <li><button onClick={() => increaseBasket(x)}>Inc</button></li>
            <p>{x.count}</p>
            <li><button onClick={() => decreaseBasket(x)}>Dec</button></li>

          </ul>
        )}
      </div>
    </div>
  )
}

export default Basket