import { useState } from "react";
import IconCart from "../assets/images/IconCart";
import avatarPng from "../assets/images/image-avatar.png"
import menuIcon from "../assets/images/icon-menu.svg"

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  console.log(openMobileNav)

  return (
    <header className="relative border sm:border-none w-full py-3 sm:py-7 p-7 md:px-16 lg:px-32 sm:after:w-[calc(100%-64px)]  md:after:w-[calc(100%-128px)] lg:after:w-[calc(100%-256px)] after:h-[2px] after:absolute after:bottom-0 sm:after:left-8 lg:after:left-32 md:after:left-16 after:bg-gray-300 after:mx-auto">
      <div className="flex justify-between items-center">
        <div 
        className="mr-4 mt-[6px] sm:hidden cursor-pointer"
        onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <img src={menuIcon} alt="" />
        </div>
        <div className="mr-10 text-2xl font-semibold flex-1">
          <h2>sneakers</h2>
        </div>
        <nav className={`flex flex-col sm:flex-row items-center list-none flex-1 gap-8 sm:gap-1 text-lg sm:text-sm font-medium text-gray-500 absolute sm:relative w-full sm:w-auto left-0 top-[61px] sm:top-0 p-10 sm:p-0 bg-white sm:bg-transparent sm:translate-x-0 ${openMobileNav ? "" : "translate-x-full"} transition-transform z-20`}>
          <li className="p-2 hover:text-gray-900 hover:font-semibold cursor-pointer">Collections</li>
          <li className="p-2 hover:text-gray-900 hover:font-semibold cursor-pointer">Men</li>
          <li className="p-2 hover:text-gray-900 hover:font-semibold cursor-pointer">Women</li>
          <li className="p-2 hover:text-gray-900 hover:font-semibold cursor-pointer">About</li>
          <li className="p-2 hover:text-gray-900 hover:font-semibold cursor-pointer">Contact</li>
        </nav>
        <div className="flex items-center gap-5">
          <div className="p-2 cursor-pointer">
            <IconCart color="#000"/>
          </div>
          <div className="w-8 aspect-square cursor-pointer">
            <img 
            src={avatarPng} 
            alt="profile avatar" 
            className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;