import { useState } from 'react'
import './App.css'
import Navbar from './components/globals/navbar'
import Slogan from './components/home/Slogan'
import SeeMore from './components/home/seeOthers'
import Product from './components/home/Product'
import coffees  from "./data/home-content"

function App() {
  const [coffeeList, setCoffeeList] = useState(0)

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='flex justify-between'>
     <section className='flex flex-col'>
      <Slogan key={coffees.id} coffees={coffees[coffeeList]}/>
      
      <SeeMore key={coffees.id} coffees={coffees[coffeeList]}/>
  </section>
      <Product key={coffees.id} coffees={coffees[coffeeList]}/>
    </main>
    </>
  )
}

export default App
