import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStartups, setLoading, setError } from "../../Slices/startupSlice";

function CarouselStartup() {

  const dispatch = useDispatch();
  const { startups, loading, error } = useSelector((state) => state.startups);

 

  if (loading) return <p>Loading startups...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

   const last5Startups = startups.slice(-5);


  return (

    <section className='bg-[#F8F7FC] w-full h-[500px] pt-10'>
        <h2 className='text-center text-xl text-[#374151] mb-14'>Explore Recent Startups</h2>

       <div className="flex w-max animate-scroll">
  {last5Startups.map((startup) => (
    <div
      key={startup.id}
      className="flex-none w-64 h-60 mx-4 bg-white shadow-lg rounded-2xl text-center overflow-hidden"
    >
      
      <div className="w-full h-44">
        <img
          src={startup.image} 
          alt={startup.name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      
      <div className="flex items-center justify-center h-18 px-2">
        <p className="text-lg font-semibold">{startup.name}</p>
      </div>
    </div>
  ))}

  
  {last5Startups.map((startup, index) => (
    <div
      key={`dup-${index}`}
      className="flex-none w-64 h-60 mx-4 bg-white shadow-lg rounded-2xl text-center overflow-hidden "
    >
      <div className="w-full h-44">
        <img
          src={startup.image}
          alt={startup.name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="flex items-center justify-center h-18 px-2">
        <p className="text-lg font-semibold">{startup.name}</p>
      </div>
    </div>
  ))}
</div>




    </section>

  )
}

export default CarouselStartup