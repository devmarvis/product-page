import ProductCarousel from "./ProductCarousel"
import IconClose from "../assets/images/IconClose"
// import iconPrevious from "../assets/images/icon-previous.svg"
// import iconNext from "../assets/images/icon-next.svg"


const ProductShowModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen max-h-screen z-30 bg-black/80 hidden sm:flex justify-center items-center">
        <div className="relative flex flex-col items-end gap-2 max-w-[360px] w-full h-auto">
            <IconClose />
            <ProductCarousel />
        </div>
    </div>
  )
}
export default ProductShowModal;