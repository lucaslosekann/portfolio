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
      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 w-full px-1 pt-5 mt-10'>
        {data.map((project, index) => <ProjectCard project={project} key={project._id} />)}
      </div>
    </div>
  )
}