import React from 'react'
import logo from "../assets/logo.png"
import {motion} from "framer-motion"
import { slideUp } from '../Utility/animation'

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col py-20 md:py-5 md:px-12 items-center px-10'>

            <div className='text-center md:text-start'>
                <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className='md:text-4xl text-3xl pb-4 font-bold'>Unlock a Passion, Side Hustle, or New <span className='text-gray-500 underline'>Profession</span></motion.h1>
                <motion.p variants={slideUp(0.4)} initial="initial" animate="animate" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam totam facere est beatae hic modi officiis vero, ut et?</motion.p>
                <motion.button variants={slideUp(0.4)} initial="initial" animate="animate" className='bg-black text-white py-2 px-4 mt-5 rounded shadow-sm hover:shadow-xl hover:shadow-slate-300 text-base hover:bg-yellow-400 hover:text-black'>More News</motion.button>
            </div>
            <div>
                <motion.img initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} src={logo} alt="hero" />
            </div>

    </section>
  )
}

export default Hero