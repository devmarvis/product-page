import { createContext, useState} from "react";

import product1 from "../assets/images/image-product-1.jpg"

export const  CarouselContext = createContext({
    currentImgUrl: "",
    openShow: false,
    setCurrentImgUrl: () => null,
    setOpenShow: () => null,
})

export const CarouselProvider = ({ children }) => {
    const [currentImgUrl, setCurrentImgUrl] = useState(product1);
    const [openShow, setOpenShow] = useState(false);

    return <CarouselContext.Provider value={{
        currentImgUrl,
        openShow,
        setCurrentImgUrl,
        setOpenShow,
    }}>
        {children}
    </CarouselContext.Provider>
}