'use client';
import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../../sanity';
import { HomeInfo } from '../../typings';
import BackgroundCircles from '../BackgroundCircles';
type Props = {
  data: HomeInfo
}

export default function Hero({ data }: Props) {
  const [text] = useTypewriter({
    words: data?.presentation,
    loop: true,
    delaySpeed: 2000
  })
  return (
    <main className='snap-center space-y-8 min-w-full overflow-hidden flex flex-col justify-center text-center h-full'>
      <BackgroundCircles />
      <Image width={128} height={128} src={urlFor(data.heroImage).url()} alt="Lucas's Photo" className='mx-auto object-cover rounded-full' />
      <div className="z-20" style={{
        overflowWrap: 'anywhere'
      }}>
        <h2 className="text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px] tracking-widest">{data?.role}</h2>
        <h1 className="sm:text-5xl text-white lg:text-6xl font-semibold px-10 text-2xl">
          <span className='sm:mr-3'>{text}</span>
          <Cursor cursorColor='#b45309' />
        </h1>
      </div>
    </main>
  )
}