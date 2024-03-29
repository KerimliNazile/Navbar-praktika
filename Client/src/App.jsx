import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import Basket from './Pages/Basket'
import Detail from './Pages/Detail'
import Add from './Pages/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
          <Route path='/:id' element={<Detail/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
