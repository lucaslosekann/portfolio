import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'
import { About as AboutType } from '../../typings'

type Props = {
  data: AboutType
}

export default function About({ data }: Props) {
  return (
    <div className='max-w-7xl flex flex-col items-center text-center pt-6 overflow-y-scroll px-4 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>About me</h3>
      <div className='flex flex-col sm:flex-row items-center flex-1 pt-4 md:pt-0 md:px-8'>
        <div className='relative w-5/6 sm:w-1/2 md:w-2/5 aspect-square sm:h-[94%] sm:aspect-auto'>
          <Image fill src={urlFor(data?.photo).url()} alt="Lucas's Photo" className='object-cover rounded-full sm:rounded-lg' />
        </div>
        <article className='flex flex-col mt-2 pb-5 sm:text-left sm:pl-5 md:px-5 md:pl-10 text-justify sm:max-w-[50%] '>
          <h4 className='text-white tracking-wider text-xl mb-2 md:text-3xl text-center md:font-semibold md:mb-5'>{data?.title}</h4>
          <span className='md:text-xl text-neutral-200 font-light'>{data?.abouteMe}</span>
        </article>
      </div>
    </div>
  )
}

/* */