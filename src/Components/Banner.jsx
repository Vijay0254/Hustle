import React from 'react'
import banner from "../assets/banner.png"
import {motion} from "framer-motion"
import { slideUp } from '../Utility/animation'

const Banner = () => {
  return (
    <section className='flex md:flex-row flex-col py-20 md:py-10 md:pt-20 md:px-12 items-center'>

        <div className='text-center md:text-start'>
            <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className='md:text-4xl text-3xl pb-4 px-16 md:px-0 font-bold'>Design is not what it looks like and feels like. Design is how <span className='text-gray-500 underline'>It Works!</span></motion.h1>
            <motion.button variants={slideUp(0.4)} initial="initial" whileInView="animate" className='hover:bg-black hover:text-white bg-yellow-400 py-2 px-4 mt-5 rounded shadow-sm hover:shadow-xl hover:shadow-slate-300 text-base'>More News</motion.button>
            <motion.div variants={slideUp(0.8)} initial="initial" whileInView="animate" className='flex pt-10 md:justify-normal justify-evenly'>
                <div className='px-10 md:w-full'>
                    <h1 className='text-2xl font-semibold'>Design Tools</h1>
                    <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt.</p>
                </div>
                <div className='px-10 md:w-full'>
                    <h1 className='text-2xl font-semibold'>Design Tools</h1>
                    <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt.</p>
                </div>
            </motion.div>
        </div>
        <div>
            <motion.img className='md:w-5/6' initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} src={banner} alt="banner" />
        </div>

    </section>
  )
}

export default Banner