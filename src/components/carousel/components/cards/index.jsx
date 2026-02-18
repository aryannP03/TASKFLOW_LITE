

function CarouselCard( props ) {
    
    return (
        
        <div className="w-65 h-85 bg-card-bg rounded-3xl shadow-md flex items-center justify-center relative"
        style={{ backgroundImage: "url('/assets/carousel-img.jpg')" }}>
            <h1 className="text-amber-300 text-xl absolute top-78 left-3 font-extrabold" >Card: {props.cardno}</h1>
        </div>
    )
}

export default CarouselCard
