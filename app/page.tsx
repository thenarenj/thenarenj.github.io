import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative h-screen font-primary">
      <Navbar />
      <Carousel />
    </main>
  )
}
