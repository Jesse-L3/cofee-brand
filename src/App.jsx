import { useState } from 'react'
import './App.css'
import Navbar from './components/globals/navbar'
import Slogan from './components/home/Slogan'
import SeeMore from './components/home/seeOthers'
import Product from './components/home/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Slogan />
      <SeeMore />
      <Product />
    </main>
    </>
  )
}

export default App
