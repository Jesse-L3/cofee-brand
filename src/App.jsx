import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./App.css";
import Navbar from "./components/globals/navbar";
import Slogan from "./components/home/Slogan";
import SeeMore from "./components/home/seeOthers";
import Product from "./components/home/Product";
import coffees from "./data/home-content";

import ScrollAnimation from "./components/home/scrollanimation"
import CoffeeMenu from "./components/home/CoffeeMenu";

// 🕐 function that cycles through every day of the week for new highlighted cofees
const highlight = () => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
};

function App() {
  // grabs all the cofees from data and only displays the coffees that match with the current day
  const today = highlight();
  const todaysHighlight = coffees.filter((coffee) => coffee.day === today);

  const [coffeeList, setCoffeeList] = useState(() => {
    return Number(localStorage.getItem("activeCoffee")) || 0;
  });

  const HandleCoffeeChange = (index) => {
    localStorage.setItem("activeCoffee", index);
    if (!document.startViewTransition) {
      setCoffeeList(index);
      return;
    }
    document.startViewTransition(() => {
      setCoffeeList(index);
    });
  };

  const List = useRef();

  useGSAP(
    () => {
      gsap.to(List.current.children, {
        y: 50,
        delay: 0.3,
        stagger: {
          each: 0.5,
          from: "center",
        },
      });
    },
    { scope: List },
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="relative flex justify-between hero">
          <div className="flex flex-col">
            <Slogan key={coffees.id} coffees={todaysHighlight[coffeeList]} />

            <div className="self-center m-auto">
              <h2 className="text-5xl text-center">Today's highlight</h2>
              <div className="flex gap-16" ref={List}>
                {todaysHighlight.map((coffee, index) => (
                  <SeeMore
                    key={coffee.id}
                    coffee={coffee}
                    index={index}
                    setCoffeeList={HandleCoffeeChange}
                    coffeeList={coffeeList}
                  />
                ))}
              </div>
            </div>
          </div>
          <Product
            key={coffees.id}
            coffees={todaysHighlight[coffeeList]}
            setCoffeeList={HandleCoffeeChange}
          />
        </section>

        <section  style={{height: "400vh"}} className="relative overflow-hidden">
          <ScrollAnimation />
        </section>
        <CoffeeMenu />
      </main>
    </>
  );
}

export default App;
