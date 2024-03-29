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
// import IconClose from "../assets/images/IconClose"
import iconPrevious from "../assets/images/icon-previous.svg"
import iconNext from "../assets/images/icon-next.svg"

export const ImgArray = [product1, product2, product3, product4];

const ProductCarousel = () => {

    const { currentImgUrl, setOpenShow, setCurrentImgUrl, openShow, currentImgIdx, setCurrentImgIdx} = useContext(CarouselContext);

    console.log(ImgArray)

    const findingIdx = (product) => {
      ImgArray.map((img, idx) => {
        if(product === img){
          setCurrentImgUrl(ImgArray[idx])
          setCurrentImgIdx(idx)
          console.log(idx)
        }
        return;
      })
    } 

    const handleNextImg = () => {
      if(currentImgIdx < ImgArray.length - 1){
        setCurrentImgIdx(currentImgIdx + 1)
        setCurrentImgUrl(ImgArray[currentImgIdx + 1])
      }else {
        setCurrentImgIdx(0)
        setCurrentImgUrl(ImgArray[0])
      }
    }

    const handlePrevImg = () => {
      if(currentImgIdx > 0){
        setCurrentImgUrl(ImgArray[currentImgIdx - 1]);
        setCurrentImgIdx(currentImgIdx - 1);
      }else{
        setCurrentImgIdx(ImgArray.length)
        setCurrentImgUrl(ImgArray[currentImgIdx]);
      }
    }

  return (
    <div className=" col-span-2 w-full sm:max-w-[376px] flex flex-col items-end">
        <div
        onClick={() => setOpenShow(true)}
        className="relative w-full mb-6 sm:rounded-xl overflow-hidden cursor-pointer"
        >
          <img src={currentImgUrl} alt="product" className="w-full object-fill" />
            <div className={`${openShow ? "absolute top-[50%] left-0 z-10" : "sm:hidden flex top-[50%] left-0"} absolute bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer`}
            onClick={handlePrevImg}
            >
              <img src={iconPrevious} alt="" />
            </div>
            <div className={`${openShow ? "absolute top-[50%] right-0 z-10" : "sm:hidden flex top-[50%] right-0"} absolute bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer`}
            onClick={handleNextImg}
            >
              <img src={iconNext} alt="" />
            </div>
        </div>
        <div className="hidden sm:grid grid-cols-4 gap-2">
            <div
            onClick={() => findingIdx(product1)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product1 && " border-[2px] border-primary"}`}>
              <img src={product1Thumbnail} alt="product 1 thumbnail" className={`object-fill ${currentImgUrl == product1 && ""}`} />
            </div>
            <div
            onClick={() => findingIdx(product2)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product2 && " border-[2px] border-primary"}`}>
              <img src={product2Thumbnail} alt="product 2 thumbnail" className={`object-fill ${currentImgUrl == product2 && ""}`} />
            </div>
            <div
            onClick={() => findingIdx(product3)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product3 && " border-[2px] border-primary"}`}>
              <img src={product3Thumbnail} alt="product 3 thumbnail" className={`object-fill ${currentImgUrl == product3 && ""}`} />
            </div>
            <div
            onClick={() => findingIdx(product4)} 
            className={` rounded-md overflow-hidden cursor-pointer ${currentImgUrl == product4 && " border-[2px] border-primary"}`}>
              <img src={product4Thumbnail} alt="product 4 thumbnail" className={`object-fill ${currentImgUrl == product4 && ""}`} />
            </div>
        </div>
    </div>
  )
}
export default ProductCarousel