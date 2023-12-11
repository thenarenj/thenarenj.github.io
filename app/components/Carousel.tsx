import About from "./carousel-items/About"
import Home from "./carousel-items/Home"
import OrderGuide from "./carousel-items/OrderGuide"
import Portfolio from "./carousel-items/Portfolio"

const Carousel = () => {
    return (
        <div className="h-screen w-full carousel carousel-vertical">
            <Home />
            <OrderGuide />
            <About />
        </div>
    )
}

export default Carousel