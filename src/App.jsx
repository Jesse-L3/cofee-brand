import { useState } from 'react'
import './App.css'
import Navbar from './components/globals/navbar'
import Slogan from './components/home/Slogan'
import SeeMore from './components/home/seeOthers'
import Product from './components/home/Product'
import coffees  from "./data/home-content"

function App() {
  const [coffeeList, setCoffeeList] = useState(0)

  const HandleCoffeeChange = (index) => {
    if (!document.startViewTransition) {
      setCoffeeList(index)
      return
    }
    document.startViewTransition(() => {
      setCoffeeList(index)
    })
  }

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='flex justify-between'>
     <section className='flex flex-col'>
      <Slogan key={coffees.id} coffees={coffees[coffeeList]}/>
      
      <div className='flex gap-8'>
      {coffees.map((coffee, index) => (
        <SeeMore key={coffee.id} coffee={coffee} index={index} setCoffeeList={HandleCoffeeChange} coffeeList={coffeeList}/>
      ))}
      </div>

  </section>
      <Product key={coffees.id} coffees={coffees[coffeeList]} setCoffeeList={HandleCoffeeChange}/>

    </main>
    </>
  )
}

export default App
