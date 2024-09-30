import React from 'react'
import banner2 from "../assets/banner2.png"
import {motion} from "framer-motion"
import { slideUp } from '../Utility/animation'

const Banner2 = () => {
  return (
    <section className='flex md:flex-row gap-10 md:gap-32 flex-col py-20 md:py-10 md:pt-20 md:px-12 items-center px-10'>
        <div>
            <motion.img initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} src={banner2} alt="banner2" />
        </div>
        <div className='text-center md:text-start'>
            <motion.p variants={slideUp(0.4)} initial="initial" whileInView="animate" className='uppercase text-lg pb-10'>Tech Addicts</motion.p>
            <motion.h1 variants={slideUp(0.2)} initial="initial" whileInView="animate" className='md:text-5xl text-3xl pb-4 font-bold'>They really understood our <span className='text-gray-500 underline'>Needs</span></motion.h1>
            <motion.button variants={slideUp(0.4)} initial="initial" whileInView="animate" className='hover:bg-black hover:text-white bg-yellow-400 py-2 px-4 mt-5 rounded shadow-sm hover:shadow-xl hover:shadow-slate-300 text-base'>More News</motion.button>
        </div>
    </section>
  )
}

export default Banner2