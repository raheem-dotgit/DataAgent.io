import { PiChartPieSliceFill } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";
import { IoIosBook } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";
import { BiSolidUserAccount } from "react-icons/bi";
import React, { useState } from 'react';






const Sidebar = () =>

{

    const [isAutobotsOpen, setIsAutobotsOpen] = useState(false);

     const toggleAutobotsDropdown = () => {
    setIsAutobotsOpen(!isAutobotsOpen);
     }
 return(

  <>
  <div className="sm:flex-col bg-white w-52 h-full inline-flex absolute border-x gap-20">
    <h1>Logo</h1>
    <div className="flex flex-col gap-3 ml-3 w-40">
    <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
    <i className="mt-1 font-extrabold"><PiChartPieSliceFill /></i>
    <span>Overview</span>
    </div>
   
      <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
      <i className="mt-1"><TbMessageChatbot /></i>
   <span>Chatbot</span>
   <select name="" id="" className="w-5 bg-transparent -rotate-90 mt-1.5"></select>
    </div>
      <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
      <i className="mt-1"><FaRobot /></i>
   <span>Autobot</span>
    <button className="w-5 bg-transparent rotate-90" onClick={toggleAutobotsDropdown}>^</button>

    </div>
      {isAutobotsOpen && (
      <div className="flex-row inline-flex align-middle gap-3 justify-center ml-5 font-light">
      <ul className="gap-2">
      <li className=" hover:bg-gray-100 rounded-xl py-3 px-9 w-48">Data Setup</li>
      <li className=" hover:bg-gray-100 rounded-xl py-3 px-9">Integration Setting</li>
      <li className=" hover:bg-gray-100 rounded-xl py-3 px-9">Playground</li>
      <li className=" hover:bg-gray-100 rounded-xl py-3 px-9">Deploy</li>
      </ul>
     
    </div>
      )}


       <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
      <i className="mt-1"><IoIosBook /></i>
   <span>Chatbot Sample</span>
    </div>

         <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2"> 
      <i className="mt-1"><FaRegAddressBook /></i>
   <span>Autobot Sample</span>
    </div>

         <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
      <i className="mt-1"><GiBreakingChain /></i>
   <span>Integrative System</span>
    </div>
         <div className="flex-row inline-flex align-middle gap-3  hover:bg-gray-100 rounded-xl py-3 px-2">
      <i className="mt-1"><BiSolidUserAccount /></i>
   <span>Account</span>
    </div>

   </div>
</div>

   
  
</>
 )
}

export default Sidebar