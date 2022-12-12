import React from 'react'
import Timeline from '../Timeline';

type Props = {}
const array = [0,0,0,0];
export default function Experience({ }: Props) {
  return (
    <div className='max-w-7xl w-full flex flex-col items-center text-center pt-6 overflow-y-scroll px-1 pl-4 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>EXPERIENCE</h3>
      <div className='flex flex-col w-full px-1 sm:flex-row sm:items-center items-start flex-1 pt-4 md:px-8 sm:max-w-full sm:flex-wrap sm:justify-around'>
        <Timeline data={Array(4).fill({
          company: 'Via Dupla Arquitetura',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil sapiente suscipit nisi autem eius error praesentium maiores natus, consectetur tempore culpa rerum quisquam sit obcaecati et sint expedita placeat.',
          role: 'Full Stack Developer',
          from: new Date(),
          to: new Date(),
          working: false
        })} />
      </div>
    </div>
  )
}