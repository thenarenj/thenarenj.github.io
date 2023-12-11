import Home from "./carousel-items/Home"

const Carousel = () => {
    return (
        <div className="h-screen w-full carousel carousel-vertical">
            <Home />
            <div id="about" className="carousel-item h-full bg-secondary">
                sadsad
            </div>
            <div id="portfolio" className="carousel-item h-full bg-secondary-content ">
                sadsad
            </div>
            <div className="carousel-item h-full bg-secondary">
                sadsad
            </div>
            <div className="carousel-item h-full bg-primary">
            </div>
            <div className="carousel-item h-full bg-secondary">
            </div>
            <div className="carousel-item h-full bg-primary">
            </div>
        </div>
    )
}

export default Carousel