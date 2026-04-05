import "./seeOthers.scss";

const seeOthers = ({ coffee, index, setCoffeeList, coffeeList }) => {
  return (
    <>
      <div
        className={`${coffee.flavour.replace(/\s+/g, "-")} ${index === coffeeList ? "active" : ""} before:rounded-lg w-[164px] h-[264px] relative before:absolute before:content-[''] before:z-10 before:h-full before:w-full items-center flex justify-center before:pointer-events-none
        ${index === coffeeList ? "before:bg-transparent" : "before:bg-[var(--filter)]" }`}
      >
        <button className="relative z-0" type="button" onClick={() => setCoffeeList(index)}>
          <img className="w-[100px]" src={coffee.image} alt="" />
        </button>
      </div>
    </>
  );
};

export default seeOthers;

// <div className='Others relative before:w-full before:h-full before:pointer-events-none before:content-[] before:absolute before:bg-[var(--filter)]'>
