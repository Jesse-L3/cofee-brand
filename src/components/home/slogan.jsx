const Slogan = ({coffees}) => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-8xl drop-shadow-[0_0_10px_#ffffff]" dangerouslySetInnerHTML={{__html: coffees.slogan}}></h1>
    </div>
  )
}

export default Slogan