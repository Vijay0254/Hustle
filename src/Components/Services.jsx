import React from 'react'
import services from "../assets/services.png"

const Services = () => {
  return (
    <section className='md:px-12 px-10 py-10'>
        <div className='flex justify-between items-center'>
          <h1 className='md:text-4xl text-2xl font-bold'>Classes to Spark Your <span className='text-gray-400 underline'>Creativity</span></h1>
          <p>Notified to spark your <span className='text-gray-400 underline'>Balance</span></p>
        </div>
        <div className='grid grid-cols-2 gap-4 md:gap-20 py-5 place-items-center'>
          <div>
            <img className='w-full' src={services} alt="services" />
          </div>
          <div className='md:w-[500px] md:pt-20 space-y-4 md:pl-20'>
            <img className='w-10 pt-10' src={services} alt="services" />
            <h1 className='uppercase md:text-xl font-bold'>Learn by Doing</h1>
            <p className='md:ml-5 ml-2 pl-2 md:pl-5 border-l-2 md:text-base text-sm border-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi earum consequatur eligendi. Quasi, numquam similique totam ipsum blanditiis porro modi fugit. Facilis vel aperiam repellat corrupti dolorum, tenetur magni?</p>
          </div>
          <div className='md:w-[500px] md:pl-44 space-y-4'>
            <img className='w-10 pt-10' src={services} alt="services" />
            <h1 className='uppercase md:text-xl font-bold'>Learn by Doing</h1>
            <p className='md:ml-5 ml-2 pl-2 md:pl-5 border-l-2 md:text-base text-sm border-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi earum consequatur eligendi. Quasi, numquam similique totam ipsum blanditiis porro modi fugit. Facilis vel aperiam repellat corrupti dolorum, tenetur magni?</p>
          </div>
          <div className='md:w-[500px] space-y-4 md:pl-44'>
            <img className='w-10 pt-10' src={services} alt="services" />
            <h1 className='uppercase md:text-xl font-bold'>Learn by Doing</h1>
            <p className='md:ml-5 ml-2 pl-2 md:pl-5 border-l-2 md:text-base text-sm border-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi earum consequatur eligendi. Quasi, numquam similique totam ipsum blanditiis porro modi fugit. Facilis vel aperiam repellat corrupti dolorum, tenetur magni?</p>
          </div>
        </div>
    </section>
  )
}

export default Services