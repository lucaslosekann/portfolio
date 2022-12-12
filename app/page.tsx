import React from 'react'

import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HorizontalDraggable from '../components/HorizontalDraggable'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { sanityClient } from '../sanity'
import { About as AboutType, Experience as ExperienceType, HomeInfo, Project, SoftSkill, TechSkill } from '../typings'
type Props = {}

export const revalidate = 30;
async function getPageInfo () :Promise<{
  home: HomeInfo,
  experiences: ExperienceType[],
  about: AboutType,
  projects: Project[],
  softSkills: SoftSkill[],
  techSkills: TechSkill[],
}>{
  const data = await Promise.all([
    sanityClient.fetch(`*[_type == "homeInfo"][0]`),
    sanityClient.fetch(`*[_type == "experience"]`),
    sanityClient.fetch(`*[_type == "about"][0]`),
    sanityClient.fetch(`*[_type == "project"]`),
    sanityClient.fetch(`*[_type == "softSkill"]`),
    sanityClient.fetch(`*[_type == "techSkill"]`),
  ])
  return {
    home: data[0],
    experiences: data[1],
    about: data[2],
    projects: data[3],
    softSkills: data[4],
    techSkills: data[5]
  }
}

export default async function Home({ }: Props) {
  const data = await getPageInfo();
  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <HorizontalDraggable>

        <section id="about" className='min-w-full flex justify-center snap-center'>
          <About data={data.about}/>
        </section>

        <section id="experience" className='min-w-full flex justify-center snap-center'>
          <Experience data={data.experiences} />
        </section>

        <Hero data={data.home}/>

        <section id="projects" className='min-w-full flex justify-center snap-center'>
          <Projects data={data.projects}/>
        </section>

        <section id="skills" className='min-w-full flex justify-center snap-center'>
          <Skills softSkills={data.softSkills} techSkills={data.techSkills} />
        </section>

      </HorizontalDraggable>
      <Footer data={data.home}/>
    </div>
  )
}