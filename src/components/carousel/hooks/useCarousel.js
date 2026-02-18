import {useState, useRef} from 'react'

function UseCarousel() {
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
      const [activeIndex, setActiveIndex] = useState(4)
      const [dragOffset, setDragOffset] = useState(0)
    
      const start = useRef(0)
      const isDragging = useRef(false)
    
      const getStyle = (index) => {
        const offset = index - activeIndex;
        const absoluteVal = Math.abs(offset);
    
        if (absoluteVal > 4) return { opacity: 0 }
    
        return {
          transform: `translateX(${(offset * 135) + dragOffset}px) 
          scale(${1 - absoluteVal * 0.08}) 
          rotateY(${(absoluteVal>2)? offset * 12 :offset * 25}deg)`,
          opacity: 1 - absoluteVal * 0.2,
          zIndex: 10 - absoluteVal,
          transition: isDragging.current ? "none" : "all 0.35s ease"
        }
      }
    
      const handlePrev = () => {
        if (activeIndex > 0) {
          setActiveIndex(prev => prev - 1)
        }
      };
    
      const handleNext = () => {
        if (activeIndex < cards.length - 1) {
          setActiveIndex(prev => prev + 1)
        }
      };
    
      const handleMouseDown = (e) => {
        isDragging.current = true
        start.current = e.clientX
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging.current) return
        setDragOffset(e.clientX - start.current)
      }
    
      const handleMouseUp = () => {
        isDragging.current = false
    
        if (dragOffset > 30) {
          handlePrev()
        } else if (dragOffset < -30) {
          handleNext()
        }
        setDragOffset(0)
      }
    
    return { cards, handleMouseDown, handleMouseMove, handleMouseUp, getStyle , handlePrev, handleNext}
}

export default UseCarousel
