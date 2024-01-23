import React from 'react'
import { Helmet } from 'react-helmet-async'
import Products from '../../Components/Products'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Products/>
    </div>
  )
}

export default Home