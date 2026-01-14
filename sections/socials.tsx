import React from 'react'

import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Socials = () => {
  return (
      <div className='p-2'>
          <p className='font-sans font-bold text-2xl mb-2 md:text-xl text-black dark:text-white'>Code & Social</p>
          <div className='flex flex-wrap'>
            <a href="https://www.linkedin.com/in/sarvan-kumar/" target="_blank" className='text-5xl text-blue-500 dark:text-blue-400 hover:scale-110 transition-all duration-300 mr-2'>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sarvan.tsx/" target="_blank" className='text-5xl text-pink-600 dark:text-pink-400 hover:scale-110 transition-all duration-300 mr-2'>
              <FaInstagramSquare />
            </a>
            <a href="https://wa.link/tpn4xf" target="_blank" className='text-5xl text-green-600 dark:text-green-400 hover:scale-110 transition-all duration-300 mr-2'>
              <FaWhatsappSquare />
            </a>
            <a href="https://twitter.com/sarvan_kumar_" target="_blank" className='text-5xl text-black dark:text-white hover:scale-110 transition-all duration-300 mr-2'> 
                <FaSquareXTwitter />
            </a>
            <a href="https://github.com/sarvan-2187" target="_blank" className='text-5xl text-gray-800 dark:text-gray-200 hover:scale-110 transition-all duration-300 mr-2'>
                <FaGithubSquare />
            </a>  
          </div>
      </div>
  )
}

export default Socials