import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative h-screen font-primary overflow-hidden">
      <Navbar />
      <Carousel />
      <Footer />
    </main>
  )
}
