import React from 'react'
import { Project } from '../../typings'
import ProjectCard from '../ProjectCard'

type Props = {
  data: Project[]
}

export default function Projects({ data }: Props) {
  return (
    <div className='max-w-7xl w-full flex flex-col items-center text-center pt-6 overflow-y-scroll px-1 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>Projects</h3>
      <div className='flex flex-col w-full px-1 sm:flex-row items-center flex-1 pt-4 md:px-8 sm:max-w-full sm:flex-wrap sm:justify-around'>
        {data.map((project, index) => <ProjectCard project={project} key={project._id} />)}
      </div>
    </div>
  )
}