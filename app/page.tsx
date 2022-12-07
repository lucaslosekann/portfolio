import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HorizontaDraggable from '../components/HorizontalDraggable'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <HorizontaDraggable>
        <section id="about" className='min-w-full flex justify-center items-center snap-center'>
          <span>About</span>
        </section>
        <section id="experience" className='min-w-full flex justify-center items-center snap-center'>
          <span>Experience</span>
        </section>
        <Hero />
        <section id="projects" className='min-w-full flex justify-center items-center snap-center'>
          <span>Projects</span>
        </section>
        <section id="skills" className='min-w-full flex justify-center items-center snap-center'>
          <span>Skills</span>
        </section>
      </HorizontaDraggable>
      <Footer />
    </div>
  )
}