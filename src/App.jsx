import { useContext } from "react"
import Header from "./components/Header"
import ProductCarousel from "./components/ProductCarousel"
import ProductDesc from "./components/ProductDesc"
import ProductShowModal from "./components/ProductShowModal"
import { CarouselContext } from "./context/CarouselContext"


function App() {
  const { openShow } = useContext(CarouselContext);

  return (
    <div className="overflow-hidden">
      <Header />
      <section className="flex flex-col justify-center sm:grid sm:grid-cols-5 sm:p-8 md:p-16 lg:p-32 lg:py-[42px] items-center">
        <ProductCarousel/>
        <ProductDesc/>
        {openShow && <ProductShowModal />}
      </section>
    </div>
  )
}

export default App
