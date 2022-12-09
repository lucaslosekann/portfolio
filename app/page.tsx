import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HorizontalDraggable from '../components/HorizontalDraggable'
import Projects from '../components/Projects'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <HorizontalDraggable>

        <section id="about" className='min-w-full flex justify-center snap-center'>
          <About />
        </section>

        <section id="experience" className='min-w-full flex justify-center items-center snap-center'>
          <span>Experience</span>
        </section>

        <Hero />

        <section id="projects" className='min-w-full flex justify-center snap-center'>
          {/* @ts-ignore */}
          <Projects />
        </section>

        <section id="skills" className='min-w-full flex justify-center items-center snap-center'>
          <span>Skills</span>
        </section>

      </HorizontalDraggable>
      <Footer />
    </div>
  )
}