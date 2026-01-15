import { LinkPreview } from '@/components/ui/link-preview';
import React from 'react'

import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Socials = () => {
  return (
      <div className='p-2'>
          <p className='font-sans font-bold text-2xl mb-2 md:text-xl text-black dark:text-white'>Code & Social</p>
      <div className='flex flex-wrap'>
        <LinkPreview url='https://ik.imagekit.io/sarvan/Portfolio/linkedin_profile.png'>
            <a href="https://www.linkedin.com/in/nagarampalli-sarvan-kumar/" target="_blank" className='text-5xl text-blue-500 dark:text-blue-600 hover:scale-90 transition-all duration-300 mr-2'>
              <FaLinkedin />
        </a>
        </LinkPreview>
        <LinkPreview url='https://ik.imagekit.io/sarvan/Portfolio/insta_profile.png'>
          <a
            href="https://www.instagram.com/sarvan.tsx/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 inline-block"
          >
            <svg width="48" height="48" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="30%" stopColor="#fa7e1e" />
                  <stop offset="60%" stopColor="#d62976" />
                  <stop offset="100%" stopColor="#962fbf" />
                </linearGradient>

                <mask id="iconMask">
                  <FaInstagramSquare color="white" size={24} />
                </mask>
              </defs>

              <rect width="100%" height="100%" fill="url(#instaGrad)" mask="url(#iconMask)" />
            </svg>
          </a>
        </LinkPreview>
        <LinkPreview url='https://ik.imagekit.io/sarvan/Portfolio/wtsp_profile.png'>
            <a href="https://wa.link/tpn4xf" target="_blank" className='text-5xl text-green-600 dark:text-green-500 hover:scale-90 transition-all duration-300 mr-2'>
              <FaWhatsappSquare />
          </a>
        </LinkPreview>
        <LinkPreview url='https://ik.imagekit.io/sarvan/Portfolio/twitter_profile.png' quality={100}>
            <a href="https://x.com/SarvanKumar2187" target="_blank" className='text-5xl text-black dark:text-gray-200 hover:scale-90 transition-all duration-300 mr-2'> 
                <FaSquareXTwitter />
          </a>
        </LinkPreview>
        <LinkPreview url='https://ik.imagekit.io/sarvan/Portfolio/github_profile.jpg' quality={100}>
            <a href="https://github.com/sarvan-2187" target="_blank" className='text-5xl text-gray-800 dark:text-gray-200 hover:scale-90 transition-all duration-300 mr-2'>
                <FaGithubSquare />
          </a>
        </LinkPreview>
          </div>
      </div>
  )
}

export default Socials