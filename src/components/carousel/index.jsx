import { useState, useRef, useEffect } from "react";
import CarouselCard from "./components/cards"

function Customcarousel() {

    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect( () => {
        setWidth(containerRef.current.children[0].clientWidth)
    }, [])
    
    const btnprev = () => {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - width;
    }
    const btnnext = () => {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft + width;
    }

    const cards = [1,2,3,4,5,6,7,8,9,10];


    return (
        <div className="main-container relative mt-5 flex ">
            
            <button onClick={btnprev}>
                <p className="text-amber-50 absolute -left-5">&lt;</p>
            </button>
              <div 
              ref={containerRef}
              className="h-[300px] min-w-[300px] overflow-hidden scroll-smooth flex">  
                {
                    cards.map((num) => (
                        <CarouselCard key={num} cardno={num} />
                    ))
                }
               </div> 
            <button onClick={btnnext}>
                <p className="text-amber-50 absolute -right-5">&gt;</p>
            </button>
        </div>
    )
}

export default Customcarousel
