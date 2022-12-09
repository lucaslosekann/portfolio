import React from 'react'

type Props = {
  name: string
}

export default function ProjectTag({ name }: Props) {
  return (
    <span className='py-[2px] px-2 border rounded-xl border-neutral-300 text-sm mr-1'>{name}</span>
  )
}