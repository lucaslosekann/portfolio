'use client';
import React, { useEffect, useRef, useState, Children } from 'react'

type Props = {
  children: React.ReactNode
}

export default function HorizontaDraggable({ children }: Props) {
  const draggableDiv = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(getMedian(Children.count(children)));
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    x: 0,
  })

  const mouseDownHandler = function (e: React.MouseEvent<HTMLDivElement>) {
    if (!draggableDiv.current) return;
    draggableDiv.current.style.userSelect = 'none';
    draggableDiv.current.style.cursor = 'grabbing';
    setIsDragging(true)
    setPosition({
      left: draggableDiv.current?.scrollLeft,
      x: e.clientX,
    })
  }
  const mouseMoveHandler = function (e: React.MouseEvent<HTMLDivElement>) {
    if (!draggableDiv.current) return
    if (!isDragging) return
    const dx = e.clientX - position.x;
    let sum = 1;
    if (dx > 0) sum = -1;
    const scaleAmount = ((Math.abs(dx) * 0.02) / 200) + 1
    draggableDiv.current.style.transition = `none`;
    draggableDiv.current.style.transform = `scaleX(${scaleAmount}) translateX(${((draggableDiv.current.clientWidth * (scaleAmount - 1)) / 2) * sum * -1}px)`;
    if (Math.abs(dx) > 200) {
      if (currentPage + sum >= Children.count(children)) {
        draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * (0)
      } else if (currentPage + sum < 0) {
        draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * (Children.count(children) - 1)
      } else {
        draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * (currentPage + sum)
      }
      setIsDragging(false)
      draggableDiv.current.style.transition = `0.1s`;
      draggableDiv.current.style.transform = `none`;
    }

  };
  const mouseUpHandler = function () {
    if (!draggableDiv.current) return
    setIsDragging(false);
    draggableDiv.current.style.transition = `0.1s`;
    draggableDiv.current.style.transform = `none`;
    draggableDiv.current.style.removeProperty('user-select');
    draggableDiv.current.style.removeProperty('cursor');
  };
  const scrollHandler = function () {
    if (!draggableDiv.current) return
    const scroll = draggableDiv.current.scrollLeft;
    const part = (draggableDiv.current.scrollWidth / Children.count(children));
    console.log(draggableDiv.current.scrollWidth, Children.count(children), (draggableDiv.current.scrollWidth / Children.count(children)))
    for (let i = 0; i < Children.count(children); i++) {
      if (scroll > (part * i) - part/2 && scroll < (part * (i + 1)) - part/2) {
        setCurrentPage(i)
        console.log(i)
        break;
      }
    }

  }


  useEffect(() => {
    if (draggableDiv.current) {
      draggableDiv.current.scrollLeft = (draggableDiv.current.scrollWidth / Children.count(children)) * (currentPage)
    }
    document.addEventListener('mouseup', mouseUpHandler)
    return () => {
      document.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [])

  return (
    <div ref={draggableDiv} className='flex-1 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-neutral-500 scroll-smooth flex flex-row overflow-x-scroll snap-x snap-mandatory '
      onMouseMove={mouseMoveHandler}
      onMouseDown={mouseDownHandler}
      onScroll={scrollHandler}>
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