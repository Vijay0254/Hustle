import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footer from "../assets/footer.png"
import { slideUp } from '../Utility/animation';
import { motion } from 'framer-motion';

const Footer = () => {
    const bgStyle ={
        backgroundImage: `url(${footer})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
  return (
    <motion.footer variants={slideUp(0.4)} initial="initial" whileInView="animate" className='text-center py-10' style={bgStyle}>
        <h1 className='text-4xl font-bold pb-5'>Join our Email</h1>
        <p className='pb-10'>Get 20% off per order</p>
        <button  className='hover:bg-black hover:text-white mb-5 bg-yellow-400 py-2 px-4 rounded shadow-sm hover:shadow-xl hover:shadow-slate-300 text-base'>Subscribe</button>
        <div className='flex justify-center gap-3'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
        </div>
    </motion.footer>
  )
}

export default Footer