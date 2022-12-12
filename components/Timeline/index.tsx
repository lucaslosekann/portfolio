import React from 'react'
import { Experience } from '../../typings'

type Props = {
  data: Experience[]
}

export default function Timeline({ data }: Props) {
  return (
    <ol className="relative">
      {data.map((point, index) =>
        <li key={point._id} className="mt-0">
          <div className={'flex-row flex w-full relative ' + (index % 2 != 0 ? 'justify-start' : 'justify-end')}>
            <div className={'flex text-left pl-[25px] flex-col items-start w-full sm:w-1/2 '
              + (index % 2 != 0 ? 'sm:text-right sm:pr-[25px] sm:pl-0' : 'sm:text-left sm:pl-[25px]')}>
              <h3 className="w-full mb-1 text-lg font-semibold text-white">{point?.role}</h3>
              <span className="w-full block mb-2 text-sm font-normal leading-none text-gray-500">{point?.company}</span>
              <time className="w-full block mb-2 text-sm font-normal leading-none text-gray-500">
                From {new Date(point?.from)?.toLocaleString('en', { month: 'long', year: 'numeric' })} to {point?.working ? 'Present' : new Date(point?.to)?.toLocaleString('en', { month: 'long', year: 'numeric' })}
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                {point?.description}
              </p>
            </div>
            {
              index + 1 != data.length &&
              <div className='bg-[length:3rem_1rem] top-0 rounded-full w-[2px] h-full absolute left-0 sm:left-1/2 transform -translate-x-1/2' style={{
                backgroundImage: "linear-gradient(0deg, #d4d4d4, #d4d4d4 75%, transparent 75%, transparent 100%)"
              }}></div>
            }
            <div className='ring-gray-800 ring-4 top-0 rounded-full bg-neutral-500 w-6 h-6 absolute left-0 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
              <svg aria-hidden="true" className="w-3 h-3 text-neutral-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </li>)}
    </ol>
  )
}