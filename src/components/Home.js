import React from 'react';

const Home = () => {
  return (
    <div className='bg-white h-screen w-screen overflow-y-hidden relative flex'>
      
      {/* Left side div */}
      <div className='h-3/4 w-1/2 p-10 mt-12 ml-11 pr-10'>
        <div className='absolute flex mb-14 '>
        <p className='text-base text-orange-500 font-semibold mt-12'>Bike delivery</p>
        <img src='delivery.png' alt='delivery boy' className='w-1/5 h-1/5 object-contain rounded-md'/>
       
        
        </div>
     <div className='absolute mt-10'>
      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor mt-10 pr-14">
          The Fastest <br></br> Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your <br></br>City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%] mt-3 text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio <br></br>est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br mt-5
          from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
        </div>
        </div>
      {/* Right side div with image */}
      <div className='h-3/4 w-1/4 relative ml-auto mr-10 mt-12'>
        <img src='/heroBg.png' alt='background' className='h-full w-full object-cover' />
      </div>
    </div>
  );
};

export default Home;
