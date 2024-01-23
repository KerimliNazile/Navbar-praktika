import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Products = () => {
    const [product, setProduct] = useState([])
    async function getProducts() {
        const data = await fetch("http://localhost:3000/outs")
        const res = await data.json()
        setProduct(res)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <section id='Products'>
                <div className="ProductArea">
                    <div className="CardContiner">
                        {product && product.map((item) => (
                            <div className="Card">
                                <Card key={item._id} id={item._id} text={item.text} price={item.price} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products