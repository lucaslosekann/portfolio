import React from 'react'
import ProjectCard from '../ProjectCard'

type Props = {}

async function getProjects() {
  return [
    {
      photos: [
        {
          url: 'https://drive.google.com/uc?export=view&id=1Terjweq6nvWAs04ioHjm3x_Eg96RP4tR',
          alt: 'Photo'
        },
        {
          url: 'https://drive.google.com/uc?export=view&id=1Terjweq6nvWAs04ioHjm3x_Eg96RP4tR',
          alt: 'Photo'
        },
        {
          url: 'https://drive.google.com/uc?export=view&id=1Terjweq6nvWAs04ioHjm3x_Eg96RP4tR',
          alt: 'Photo'
        },
      ],
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deleniti quo cumque quam! Ipsa alias eveniet, corporis veritatis libero rem unde enim, maxime officia, perspiciatis accusantium explicabo quos aliquid! Ipsam. Nostrum, asperiores odio? Sequi a blanditiis vel harum totam consequuntur ipsa ipsum voluptates voluptatum mollitia unde numquam sit quidem, omnis dolorem error culpa voluptatibus animi molestias assumenda eveniet! Molestiae, illum?",
      title: "VIA DUPLA",
      repoUrl: 'https://github.com/lucaslosekann/via-dupla',
      visitUrl: 'https://viaduplaarquitetura.com.br',
      tags: [
        'Express', 'EJS', 'NodeJS'
      ]
    }
  ]
}
export default async function Projects({ }: Props) {
  const data = await getProjects();
  return (
    <div className='max-w-7xl w-full flex flex-col items-center text-center pt-6 overflow-y-scroll px-1 customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>Projects</h3>
      <div className='flex flex-col w-full px-1 sm:flex-row items-center flex-1 pt-4 md:px-8 sm:max-w-full sm:flex-wrap sm:justify-around'>
        {data.map((project, index) => <ProjectCard project={project} key={index} />)}
      </div>
    </div>
  )
}