import React from 'react'
import { Experience as ExperienceType } from '../../typings';
import Timeline from '../Timeline';

type Props = {
  data: ExperienceType[]
}

export default function Experience({ data }: Props) {
  return (
    <div className='max-w-7xl w-full flex flex-col items-center text-center pt-6 overflow-y-scroll px-1 pl-4 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>EXPERIENCE</h3>
      <div className='flex flex-col w-full px-1 sm:flex-row sm:items-center items-start flex-1 pt-4 md:px-8 sm:max-w-full sm:flex-wrap sm:justify-around'>
        <Timeline data={data} />
      </div>
    </div>
  )
}