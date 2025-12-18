import React from 'react'
import img from "../assets/image 3.png"
import { FaWallet } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


const Header = () => {
  return (
<header className="w-full h-16 px-10  flex items-center justify-between    border-b border-white/5  ">


      {/* LEFT – Logo */}
      <div className="flex items-center gap-2 ">
        <img src={img} alt=""  className='w-28'/>
      </div>

      {/* CENTER – Balance */}
      <div className="flex items-center justify-between gap-3  rounded-sm  border border-white/7 bg-gray-50/10">
     
        <span className="text-sm font-semibold ml-3 ">$0.00</span>
        <button className=" bg-green-500 hover:bg-green-600 text-black text-sm p-1  rounded-sm font-semibold">
             <FaWallet  className="w-3 h-3 text-black " />
        </button>
      </div>

      {/* RIGHT – Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <FaBell className="w-3 h-4 text-gray-400 hover:text-white cursor-pointer" />

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-md  border-2 border-green-500"
          />

          <div className='bg- rounded-sm p-1 bg-blue-950/40 '> <FaChevronDown className="w-2 h-2  text-gray-400" /></div>
         
        </div>
      </div>
    </header>
  )
}

export default Header