import { useState } from 'react'
import './App.css'
import Navbar from './components/globals/navbar'
import Slogan from './components/home/slogan'
import SeeMore from './components/home/see-others'
import Product from './components/home/product'

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
