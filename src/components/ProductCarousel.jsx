import product1 from "../assets/images/image-product-1.jpg"
import product1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg"
import product4 from "../assets/images/image-product-4.jpg"
import product4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg"
import { useContext } from "react"
import { CarouselContext } from "../context/CarouselContext"
import IconClose from "../assets/images/IconClose"

const ProductCarousel = () => {

    const { currentImgUrl, setOpenShow, setCurrentImgUrl } = useContext(CarouselContext);

  return (
    <div className=" col-span-2 w-full sm:max-w-[376px] flex flex-col items-end">
        <div
        onClick={() => setOpenShow(true)}
        className="w-full mb-6 sm:rounded-xl overflow-hidden cursor-pointer"
        >
          <img src={currentImgUrl} alt="product" className="w-full object-fill" />
        </div>
        <div className="hidden sm:grid grid-cols-4 gap-2">
            <div
            onClick={() => setCurrentImgUrl(product1)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product1 && " border-[2px] border-primary"}`}>
              <img src={product1Thumbnail} alt="product 1 thumbnail" className={`object-fill ${currentImgUrl == product1 && ""}`} />
            </div>
            <div
            onClick={() => setCurrentImgUrl(product2)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product2 && " border-[2px] border-primary"}`}>
              <img src={product2Thumbnail} alt="product 2 thumbnail" className={`object-fill ${currentImgUrl == product2 && ""}`} />
            </div>
            <div
            onClick={() => setCurrentImgUrl(product3)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product3 && " border-[2px] border-primary"}`}>
              <img src={product3Thumbnail} alt="product 3 thumbnail" className={`object-fill ${currentImgUrl == product3 && ""}`} />
            </div>
            <div
            onClick={() => setCurrentImgUrl(product4)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product4 && " border-[2px] border-primary"}`}>
              <img src={product4Thumbnail} alt="product 4 thumbnail" className={`object-fill ${currentImgUrl == product4 && ""}`} />
            </div>
        </div>
    </div>
  )
}
export default ProductCarousel