'use client';
import React, { useEffect, useRef, useState, Children } from 'react'

type Props = {
  children: React.ReactNode
}

export default function HorizontalDraggable({ children }: Props) {
  const draggableDiv = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollHandler = function () {
    if (!draggableDiv.current) return
    const scroll = draggableDiv.current.scrollLeft;
    const part = (draggableDiv.current.scrollWidth / Children.count(children));
    for (let i = 0; i < Children.count(children); i++) {
      if (scroll > (part * i) - part / 2 && scroll < (part * (i + 1)) - part / 2) {
        setCurrentPage(i)
        break;
      }
    }
  }

  const leftHandler = function () {
    if (!draggableDiv.current) return;
    const part = (draggableDiv.current.scrollWidth / Children.count(children));
    if(currentPage - 1 < 0){
      draggableDiv.current.scrollLeft = part * Children.count(children);
    }else{
      draggableDiv.current.scrollLeft = part * (currentPage-1);
    }
  }
  const rightHandler = function () {
    if (!draggableDiv.current) return;
    const part = (draggableDiv.current.scrollWidth / Children.count(children));
    if(currentPage + 1 > (Children.count(children)-1)){
      draggableDiv.current.scrollLeft = 0;
    }else{
      draggableDiv.current.scrollLeft = part * (currentPage+1);
    }
  }
  useEffect(() => {
    if (draggableDiv.current) {
      if (!window.location.hash) {
        draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * getMedian(Children.count(children));
      } else {
        const element = document.querySelector(window.location.hash)
        if (!element) {
          draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * getMedian(Children.count(children));
        } else {
          element.scrollIntoView();
        }
      }
    }
  }, [children])

  return (
    <div ref={draggableDiv} className='flex-1 customscroll scroll-smooth flex overflow-y-hidden flex-row overflow-x-scroll snap-x snap-mandatory'
      onScroll={scrollHandler}>
        <svg onClick={leftHandler} className="text-gray-600 hover:text-inherit hidden md:block w-16 h-16 cursor-pointer absolute my-auto top-0 bottom-0 left-0 z-30 2xl:left-32" clipRule="evenodd" fillRule="evenodd" fill='currentColor' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z" fillRule="nonzero" /></svg>
        <svg onClick={rightHandler} className="text-gray-600 hover:text-inherit 2xl:right-32 hidden md:block w-16 h-16 cursor-pointer absolute my-auto top-0 bottom-0 right-0 z-30" clipRule="evenodd" fillRule="evenodd" fill='currentColor' strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fillRule="nonzero" /></svg>
      {children}
    </div>
  )
}

function getMedian(length: number) {
  if (length === 0) return 0;
  var half = Math.floor(length / 2);
  if (length % 2) //É impar
    return half;
  return half - 1;
}