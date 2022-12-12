'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { HomeInfo } from '../../typings';

type Props = {
  data: HomeInfo
}

export default function Footer({ data }: Props) {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 300
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 2,
        bounce: 0.3,
        type: 'spring',
        damping: 14
      }} className='flex items-center flex-col md:flex-row md:justify-between max-w-7xl w-full mx-auto left-0 right-0 sm:px-5 md:pb-5 mb-[10px] pt-5'>
      <div className='hidden lg:inline-flex w-1/3 justify-start'>lucaslosekann.dev</div>
      <nav className='md:w-1/3 md:flex lg:justify-center'>
        <ul className='flex'>
          <li><a href="#about" className='navItem'>About</a></li>
          <li><a href="#experience" className='navItem'>Experience</a></li>
          <li><a href="#projects" className='navItem'>Projects</a></li>
          <li><a href="#skills" className='navItem'>Skills</a></li>
        </ul>
      </nav>
      <div
        className='md:w-1/3 md:flex md:justify-end'
      >
        <SocialIcon target="_blank" url={`mailto:${data?.email}`} bgColor='transparent' fgColor='currentColor' className='socialIcon' />
        <SocialIcon target="_blank" url={`https://api.whatsapp.com/send?phone=${data?.phoneNumber}`} bgColor='transparent' fgColor='currentColor' className='socialIcon' />
        {data?.socials.map(url =>
            <SocialIcon key={url} target="_blank" url={url} bgColor='transparent' fgColor='currentColor' className='socialIcon' />
        )}
      </div>
    </motion.footer>
  )
}