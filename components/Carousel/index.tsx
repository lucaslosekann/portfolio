import React, { useState } from 'react'
import Image from 'next/image'
import { Image as ImageType } from '../../typings'
import { urlFor } from '../../sanity'
import { rgbDataURL } from '../../utils'
type Props = {
  images: {
    _key: string,
    _type: "PhotoInfo",
    alt: string,
    photo: ImageType
  }[]
}


export default function Carousel({ images }: Props) {
  const [currentPage, setCurrentPage] = useState(0);

  const leftHandler = function () {
    setCurrentPage(c => c - 1 < 0 ? images.length - 1 : c - 1)
  }
  const rightHandler = function () {
    setCurrentPage(c => c + 1 >= images.length ? 0 : c + 1)
  }

  return (
    <div className='w-full h-full'>
      <svg onClick={leftHandler}  className="text-amber-700 hover:text-inherit w-10 sm:w-16 h-10 sm:h-16 cursor-pointer absolute my-auto top-0 bottom-0 left-0 z-30" clipRule="evenodd" fillRule="evenodd" fill='currentColor' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z" fillRule="nonzero" /></svg>
      <svg onClick={rightHandler} className="text-amber-700 hover:text-inherit w-10 sm:w-16 h-10 sm:h-16 cursor-pointer absolute my-auto top-0 bottom-0 right-0 z-30" clipRule="evenodd" fillRule="evenodd" fill='currentColor' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fillRule="nonzero" /></svg>
      {images.map((img, i) =>
        <div key={img._key} className={'absolute top-0 left-0 flex w-full h-full ease-in duration-300 ' + (i != currentPage ? 'opacity-0' : 'opacity-100')}>
          <Image placeholder='blur' blurDataURL={rgbDataURL(70, 70, 70)} fill src={urlFor(img?.photo).url()} alt={img?.alt} className='object-cover aspect-video' />
        </div>
      )}
    </div>
  )
}
