import React from 'react'
import { Outlet } from 'react-router-dom'
import Product from '../component/Product'

const Home = () => {
  return (
    <div>
        <Product  />
        <Outlet />
    </div>
  )
}

export default Home
