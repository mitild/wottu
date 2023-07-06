import { useState, useRef, useCallback } from 'react'

const useIntersectionObserver = () => {
  const [ intersected, setIntersected ] = useState(true)
  const [hoveredCardStyles, setHoveredCardStyles] = useState({
    left: "50%",
    right: "50%",
    transform: "translateX(-50%)",
  })

  const observer = useRef()
  const listEl = useCallback(node => {
    
    if(observer.current) {
      observer.current.disconnect()
    } 

    observer.current = new IntersectionObserver(entries => {
      // console.log(entries[0].boundingClientRect.x)
      if(entries[0].boundingClientRect.x < 100) {
        setHoveredCardStyles({
          left: "0",
          right: "0",
          transform: "none",
        })
      }
      else if(entries[0].boundingClientRect.x > 1150) {
        setHoveredCardStyles({
          left: "none",
          right: "0",
          transform: "none",
        })
      }
      if(!entries[0].isIntersecting) {
        setIntersected(false)
      } 
      else {
        setIntersected(true)
      }

    }, {
        threshold: 1,
    })
      if(node) {
        // Observe the created entry or element
        observer.current.observe(node)
      }

  }, [])

  return { intersected, hoveredCardStyles, listEl }
}

export default useIntersectionObserver