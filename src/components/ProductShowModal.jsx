import ProductCarousel from "./ProductCarousel"
import IconClose from "../assets/images/IconClose"


const ProductShowModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen max-h-screen z-10 bg-black/80 flex justify-center items-center">
        <div className="flex flex-col items-end gap-2 max-w-[360px] w-full">
            <IconClose />
            <ProductCarousel />
        </div>
    </div>
  )
}
export default ProductShowModal