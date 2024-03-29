import { createContext, useState} from "react";

import product1 from "../assets/images/image-product-1.jpg"

export const  CarouselContext = createContext({
    currentImgUrl: "",
    currentImgIdx: "",
    openShow: false,
    setCurrentImgUrl: () => null,
    setOpenShow: () => null,
})

export const CarouselProvider = ({ children }) => {
    const [currentImgUrl, setCurrentImgUrl] = useState(product1);
    const [currentImgIdx, setCurrentImgIdx ] = useState(0);
    const [openShow, setOpenShow] = useState(false);

    return <CarouselContext.Provider value={{
        currentImgUrl,
        currentImgIdx,
        openShow,
        setCurrentImgUrl,
        setCurrentImgIdx,
        setOpenShow,
    }}>
        {children}
    </CarouselContext.Provider>
}