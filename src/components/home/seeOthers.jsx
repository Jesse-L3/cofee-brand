import './seeOthers.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const seeOthers = ({coffee, index, setCoffeeList, coffeeList}) => {
  return (
    <div className={`${coffee.flavour.replace(/\s+/g, '-')} ${index === coffeeList ? 'active' : ''}`}><button type='button' onClick={() => setCoffeeList(index)}><img className='w-[100px]' src={coffee.image} alt="" /></button></div>
  )
}

export default seeOthers

// <div className='Others relative before:w-full before:h-full before:pointer-events-none before:content-[] before:absolute before:bg-[var(--filter)]'>