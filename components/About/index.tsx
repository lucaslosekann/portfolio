import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='max-w-7xl flex flex-col items-center text-center pt-6 overflow-y-scroll px-4 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>About me</h3>
      <div className='flex flex-col sm:flex-row items-center flex-1 pt-4 md:px-8'>
        <img src="https://github.com/lucaslosekann.png" alt="Lucas's Photo" className='object-cover rounded-full sm:rounded-lg w-5/6 sm:w-1/2 md:h-5/6 md:w-2/5' />
        <article className='mt-2 pb-5 sm:text-left sm:pl-5 md:px-5 md:pl-10'>
          <h4 className='text-white tracking-wider text-xl mb-2 md:text-3xl md:font-bold md:mb-5'>I'm Lucas Losekann Rosa,</h4>
          <span className='md:text-xl text-neutral-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem, a eius commodi molestias dignissimos cupiditate, explicabo iure iste sunt cum pariatur. Illo, dolores illum eius quo hic maxime veniam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem, a eius commodi molestias dignissimos cupiditate, explicabo iure iste sunt cum pariatur. Illo, dolores illum eius quo hic maxime veniam!
          </span>
        </article>
      </div>
    </div>
  )
}