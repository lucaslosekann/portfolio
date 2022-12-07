import React from 'react'

type Props = {}

export default function BackgroundCircles
({}: Props) {
  return (
    <div className="relative flex justify-center items-center z-0">
      <div className='mt-48 absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping'/>
      <div className='mt-48 absolute border border-[#333333] rounded-full h-[300px] w-[300px]'/>
      <div className='mt-48 absolute border border-[#333333] rounded-full h-[500px] w-[500px]'/>
      <div className='mt-48 absolute border border-[#b45309] opacity-60 rounded-full h-[650px] w-[650px] animate-pulse'/>
      <div className='mt-48 absolute border border-[#333333] rounded-full h-[800px] w-[800px]'/>
    </div>
  )
}