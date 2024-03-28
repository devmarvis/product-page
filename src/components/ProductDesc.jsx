import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import IconCart from "../assets/images/IconCart"
import { useState } from "react";

const ProductDesc = () => {
    const [itemQty, setItemQty] = useState(0);

  return (
    <div className="p-12 py-4 col-span-3">
        <article className="mb-4">
            <h2 className="uppercase mb-2 font-semibold text-sm text-primary">sneaker company</h2>
            <h3 className="capitalize mb-6 text-4xl">fall limited edition<br/>sneakers</h3>
            <p className="text-gray-400">These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </article>
        <div className="mb-6 flex justify-between">
            <div className="font-semibold inline-flex items-center gap-2 mb-1">
                <p className="text-xl">$125.00</p>
                <span className="px-2 py-[2px] rounded-[4px] bg-secondary text-primary">50%</span>
            </div>
            <p className="font-medium text-gray-400 line-through">$250.00</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex bg-gray-100 justify-between p-1 rounded-[4px] overflow-hidden">
                <div
                onClick={() => setItemQty(itemQty > 0 ? itemQty - 1 : itemQty)} 
                className="p-[6px] px-3 flex items-center justify-center bg-gray-100 cursor-pointer">
                    <img src={minus} alt="reduce" />
                </div>
                <div className="p-[6px] px-3 flex items-center justify-center bg-gray-100">{itemQty}</div>
                <div
                onClick={() => setItemQty(itemQty < 12 ? itemQty + 1 : itemQty)} 
                className="p-[6px] px-3 flex items-center justify-center bg-gray-100 cursor-pointer">
                    <img src={plus} alt="increase" />
                </div>
            </div>
            <button className="flex justify-center items-center gap-2 py-[12px] px-10 rounded-md bg-primary text-white text-sm font-semibold">
                <div>
                    <IconCart color="#fff"/>
                </div>
                <p>Add to cart</p>
            </button>
        </div>
    </div>
  )
}
export default ProductDesc;