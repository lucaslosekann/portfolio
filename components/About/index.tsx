import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='max-w-7xl flex flex-col items-center text-center pt-6 overflow-y-scroll px-4 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>About me</h3>
      <div className='flex flex-col sm:flex-row items-center flex-1 pt-4 md:px-8'>
        <img src="https://github.com/lucaslosekann.png" alt="Lucas's Photo" className='object-cover rounded-full sm:rounded-lg w-5/6 sm:w-1/2 md:h-5/6 md:w-2/5' />
        <article className='mt-2 pb-5 sm:text-left sm:pl-5 md:px-5 md:pl-10 text-justify'>
          <h4 className='text-white tracking-wider text-xl mb-2 md:text-3xl text-center md:font-semibold md:mb-5'>I&apos;m Lucas Losekann Rosa,</h4>
          <span className='md:text-xl text-neutral-200 font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt sit incidunt dolorem amet labore necessitatibus. Autem asperiores assumenda eius ipsa, est possimus facilis, consequatur mollitia at cum, quibusdam velit!
          Voluptate facere cumque illum ea nihil commodi et amet earum voluptates aspernatur vel in saepe impedit veritatis quas, a cupiditate delectus adipisci eius fugiat. Laboriosam sequi tempore recusandae rerum quasi?
          Sed id officiis qui distinctio, voluptate doloribus, ullam perspiciatis maiores ducimus veritatis, minus deleniti alias laudantium dolore facere nihil debitis. Obcaecati unde debitis dolor odio! Cumque, veritatis enim? Assumenda, ipsa!
          Facilis laboriosam quae maiores corporis pariatur temporibus culpa in repellat magnam, voluptas animi numquam architecto aspernatur consectetur placeat, beatae mollitia! Voluptas corrupti dolores repellat veniam, fugit nulla assumenda blanditiis ipsam.
          </span>
        </article>
      </div>
    </div>
  )
}