import { useState, useRef } from "react";
import CarouselCard from "./components/cards";
import UseCarousel from "./hooks/useCarousel";

function Customcarousel() {


  const { cards, handleMouseDown, handleMouseMove, handleMouseUp, getStyle, handleNext, handlePrev} = UseCarousel()
  

  return (
    <div
      className="relative h-105 mt-10 flex items-center justify-center overflow-hidden perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >

      <button
        onClick={handlePrev}
        className="absolute left-5 z-20 px-3 py-2 bg-black/40 text-white rounded-md"
      >
        &lt;
      </button>

      <div
        className="relative w-[900px] h-full flex items-center justify-center"
        onMouseDown={handleMouseDown}
      >
        {cards.map((num, index) => (
          <div
            key={num}
            style={getStyle(index)}
            className="absolute w-65 h-80 cursor-grab select-none">
            <CarouselCard cardno={num} />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-5 z-20 px-3 py-2 bg-black/40 text-white rounded-md">
        &gt;
      </button>

    </div>
  )
}

export default Customcarousel









// import { useState } from "react";
// import CarouselCard from "./components/cards";

// function Customcarousel() {
//   const [activeIndex, setActiveIndex] = useState(2)
//   const cards = [1,2,3,4,5,6,7,8,9,10]

//   const getStyle = (index) => {
//     const offset = index - activeIndex;
//     const absOffset = Math.abs(offset);

//     if (absOffset > 2) {
//       return { opacity: 0 }
//     }

//     return {
//       transform: ` translateX(${offset * 180}px) scale(${1 - absOffset * 0.09})`,
//       opacity: 1 - absOffset * 0.25,
//       zIndex: 10 - absOffset,
//     //   rotateY:(${offset * -12}deg),
//     }
//   }

//   const handlePrev = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(prev => prev - 1);
//     }
//   }

//   const handleNext = () => {
//     if (activeIndex < cards.length - 1) {
//       setActiveIndex(prev => prev + 1);
//     }
//   }

//   return (
//     <div className="relative h-100 mt-5 flex items-center justify-center [prespective-1000px]">

//       {/* Prev Button */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 z-20 px-3 py-2 bg-black/40 text-white rounded-md"
//       >
//         &lt;
//       </button>

//       {/* Cards */}
//       <div className="relative w-75 h-87.5">
//         {cards.map((num, index) => (
//           <div
//             key={num}
//             style={getStyle(index)}
//             className="absolute transition-all duration-500 ease-in-out"
//           >
//             <CarouselCard cardno={num} />
//           </div>
//         ))}
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         className="absolute right-0 z-20 px-3 py-2 bg-black/40 text-white rounded-md"
//       >
//         &gt;
//       </button>

//     </div>
//   );
// }

// export default Customcarousel;
























// import { useState, useRef, useEffect } from "react";
// import CarouselCard from "./components/cards"

// function Customcarousel() {

//     const containerRef = useRef(null);
//     const [width, setWidth] = useState(0);

//     useEffect( () => {
//         setWidth(containerRef.current.children[0].clientWidth)
//     }, [])

//     const btnprev = () => {
//         containerRef.current.scrollLeft = containerRef.current.scrollLeft - width;
//     }
//     const btnnext = () => {
//         containerRef.current.scrollLeft = containerRef.current.scrollLeft + width;
//     }

//     const cards = [1,2,3,4,5,6,7,8,9,10];


//     return (
//         <div className="main-container relative mt-5 flex ">
            
//             <button onClick={btnprev}>
//                 <p className="text-amber-50 absolute -left-5">&lt;</p>
//             </button>
//               <div 
//               ref={containerRef}
//               className="h-[300px] min-w-[300px] overflow-hidden scroll-smooth flex">  
//                 {
//                     cards.map((num) => (
//                         <CarouselCard key={num} cardno={num} />
//                     ))
//                 }
//                </div> 
//             <button onClick={btnnext}>
//                 <p className="text-amber-50 absolute -right-5">&gt;</p>
//             </button>
//         </div>
//     )
// }

// export default Customcarousel
