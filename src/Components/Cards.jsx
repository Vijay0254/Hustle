import React from 'react'
import about from "../assets/about.png"
import connect from "../assets/connect.png"
import plugin from "../assets/plugin.png"
import { slideUp } from '../Utility/animation';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <motion.section variants={slideUp(0.8)} initial="initial" whileInView="animate" className='py-20 gap-y-20 md:gap-y-0 md:pt-44 flex md:flex-row justify-evenly items-center px-12 flex-col'>
        <div className='w-64 p-5 shadow-lg shadow-gray-300 flex flex-col justify-center items-center text-center'>
            <div className='bg-black w-12 h-12 rounded-full flex justify-center'>
                <img className='w-10 p-2' src={about} alt="about" />
            </div>
            <h1 className='text-xl font-bold py-5'>About</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt neque, iste rem aliquid fugit illum dolorum quas corporis repellendus magni.</p>
            <button className='my-5 text-lg font-semibold'>Learn More</button>
        </div>
        <div className='w-64 p-5 shadow-lg shadow-gray-300 flex flex-col justify-center items-center text-center'>
            <div className='bg-black w-12 h-12 rounded-full flex justify-center'>
                <img className='w-10 p-2' src={connect} alt="about" />
            </div>
            <h1 className='text-xl font-bold py-5'>Connection</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt neque, iste rem aliquid fugit illum dolorum quas corporis repellendus magni.</p>
            <button className='my-5 text-lg font-semibold'>Learn More</button>
        </div>
        <div className='w-64 p-5 shadow-lg shadow-gray-300 flex flex-col justify-center items-center text-center'>
            <div className='bg-black w-12 h-12 rounded-full flex justify-center'>
                <img className='w-12 p-3' src={plugin} alt="about" />
            </div>
            <h1 className='text-xl font-bold py-5'>Plugin</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt neque, iste rem aliquid fugit illum dolorum quas corporis repellendus magni.</p>
            <button className='my-5 text-lg font-semibold'>Learn More</button>
        </div>
    </motion.section>
  )
}

export default Cards