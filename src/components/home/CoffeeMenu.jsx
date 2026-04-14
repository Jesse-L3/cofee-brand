const CoffeeMenu = ({coffees}) => {
  return (
    <section className="h-screen bg-[black]">
      {coffees.map((coffee) => (
        <div key={coffee.id} className="text-white ">
            {coffee.flavour}
            <img className="w-[100px]" src={coffee.image} alt={coffee.flavour} />
        </div>
      ))}
    </section>
  )
}

export default CoffeeMenu