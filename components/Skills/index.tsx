import React from 'react'

type Props = {}

export default function Skills({ }: Props) {
  return (
    <div className='max-w-7xl w-full flex flex-col items-center text-center pt-6 px-1 overflow-y-scroll customscroll'>
      <h3 className='uppercase tracking-[10px] text-xl'>SKILLS</h3>
      <div className='w-full flex flex-col md:flex-row justify-around mt-3'>
        <div className='w-full md:w-[46%]'>
          <h4 className='text-white uppercase tracking-[6px] text-xl text-left px-3 w-full mt-5 decoration-amber-700 underline underline-offset-[5px]'>TECH SKILLS</h4>
          <div className='grid md:grid-cols-4 grid-cols-3 gap-3 md:gap-5 w-full px-1 pt-5'>
            {
              Array(17).fill(0).map((_, i) => (
                <div key={i} className='rounded-full bg-gray-900 mb-4'>
                  <img
                    src="https://github.com/lucaslosekann.png"
                    className="rounded-full object-cover h-auto" />
                </div>
              ))
            }
          </div>
        </div>
        <div className='hidden md:block h-[95%] mt-[2%] border bg-white border-white'></div>
        <div className='w-full md:w-[46%] px-3'>
          <h4 className='text-white uppercase tracking-[6px] text-xl text-left px-3 w-full mt-5 decoration-amber-700 underline underline-offset-[5px]'>SOFT SKILLS</h4>
          <div className='flex flex-col mt-5'>
            {
              Array(4).fill(0).map((_, i) => (
                <div key={i} className='text-left mb-5'>
                  <h5 className='items-baseline uppercase tracking-widest text-lg w-full text-neutral-200 font-light mb-2'>
                    <span className='text-3xl text-neutral-100 font-semibold'>{padNumber(i + 1)}</span> Collaboration</h5>
                  <span className='text-white'>
                    I am willing to help when someone from the team encounters problems or bugs. I also know how to listen and understand colleagues from other areas, seeking to add value to projects as a whole, not just the part for which I am technically responsible.
                  </span>
                  <div className='w-2/3 border bg-white border-white mx-auto mt-2'></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function padNumber(number: number, size: number = 2) {
  return new Array(size).join('0').slice(size * -1) + number;
}