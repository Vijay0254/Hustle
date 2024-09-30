import React from 'react'
import logo from "../assets/logo.png"
import {motion} from "framer-motion"
import { slideBottom } from '../Utility/animation'

const Header = () => {
    const menu = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Features",
            link: "#"
        },
        {
            title: "Shop",
            link: "#"
        },
        {
            title: "About us",
            link: "#"
        },
        {
            title: "Contact",
            link: "#"
        },
    ]
  return (
    <motion.header variants={slideBottom(0.2)} initial="initial" animate="animate" className='flex px-2 md:px-5 py-2 justify-between items-center'>
        <div className='flex items-center gap-3'>
            <img src={logo} className='w-[70px]' alt="logo" />
            <p className='font-bold text-xl'>Hustle</p>
        </div>
        <div className='md:block hidden'>
            <ul className='flex items-center gap-10'>
                {menu.map((element,index) =>(
                    <li key={index}>
                        <a className='hover:text-yellow-600 uppercase' href={element.link}>{element.title}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button className='bg-yellow-600 text-white py-1 px-2 md:py-2 md:px-4 rounded shadow-sm hover:shadow-xl hover:shadow-slate-300 text-sm md:text-base'>Request For Quotes</button>
        </div>
    </motion.header>
  )
}

export default Header