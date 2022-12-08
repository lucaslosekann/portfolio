'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles';
type Props = {}

export default function Hero({ }: Props) {
  const [text] = useTypewriter({
    words: [
      'Hello, people call me Lucas', 'Fella-That-Codes.tsx', '<AndDrinksALotOfCoffee />'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <main className='snap-center space-y-8 min-w-full overflow-hidden flex flex-col justify-center text-center h-full'>
      <BackgroundCircles />
      <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://github.com/lucaslosekann.png" alt="Lucas's Photo" />
      <div className="z-20" style={{
        overflowWrap: 'anywhere'
      }}>
        <h2 className="text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px] tracking-widest">FULLSTACK DEVELOPER</h2>
        <h1 className="sm:text-5xl text-white lg:text-6xl font-semibold px-10 text-2xl">
          <span className='sm:mr-3'>{text}</span>
          <Cursor cursorColor='#b45309' />
        </h1>
      </div>
    </main>
  )
}