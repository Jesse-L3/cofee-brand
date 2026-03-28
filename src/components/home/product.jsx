import React from 'react'

const product = ({coffees}) => {
  return (
    <section className='Product flex justify-center relative rounded-tl-[60px] rounded-bl-[60px] h-screen w-160 bg-[var(--secondary-color)]'>
      
      <img src={coffees.image} alt="coffee" className='absolute -left-55 top-1/2 -translate-y-1/2 h-[695px]'/>
      <h2 className='text-center border-b !text-transparent max-h-[600px] self-center text-8xl/30 coffee-name'>Macha Deluxe Try it now</h2>
    </section>
  )
}

export default product