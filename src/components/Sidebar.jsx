import React, { useState } from 'react';
import { HiMiniUsers } from "react-icons/hi2";
import { ImManWoman } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  let [open, setOpen] = useState(false);
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);

  return (
    <div className="relative bg-color">
      {/* Hamburger Icon for Small Screens */}
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 bg-color text-white `}>
        <h1 className="h-[50px] text-3xl font-semibold mb-6 p-5">Logo</h1>
        <ul>
          <li className="mb-2 bg-color p-3 text-center border-t-2 border-b-2"><Link to="/" className="text-2xl">Dashboard</Link></li>
          
          <li className="mb-2 p-1 pl-4 border-b-2" onClick={() => setOpen1(!open1)}><p className="text-xl cursor-pointer"><ImManWoman className='inline'/>  Manage Students
          {!open1 ? (
                    <IoIosArrowDown className='inline' />
                  ) : (
                    <IoIosArrowUp className='inline'/>
                  )}
          </p>
          <ul className={`${!open1 ? "hidden" : "block"}`}>
            <li className='pl-10 pt-2'><a href="" className='text-lg'>
            <IoIosArrowForward className="inline" />
            Import Students</a></li>
            <li className='pl-10 pt-2-'><Link to="/addStudent" className='text-lg'>
            <IoIosArrowForward className="inline" />
            Add Student</Link></li>
            <li className='pl-10 pt-2-'><Link to="/studentlist" className='text-lg'>
            <IoIosArrowForward className="inline" />
            List Students</Link></li>
          </ul>
          
          </li>
          <li className="mb-2 p-1 pl-4 border-b-2"><Link to="/aboutus" className="text-xl"><FaAddressCard className='inline'/>  About Us</Link></li>
          <li className="mb-2 p-1 pl-4 border-b-2"><Link to="/contactus" className="text-xl"><MdEmail className='inline'/>  Contact Us</Link></li>
          <li className="mb-2 p-1 pl-4 border-b-2"><Link to="/service" className="text-xl"><MdHomeRepairService className='inline'/>  Services</Link></li>
          <li className="mb-2 p-1 pl-4 border-b-2"><Link to="/howtouse" className="text-xl"><FaBookReader className='inline'/>  How To Use</Link></li>
          <li className="mb-2 p-1 pl-4 border-b-2" onClick={() => setOpen2(!open2)}><p className="text-xl cursor-pointer"><MdOutlineMiscellaneousServices className='inline'/>   Settings
          {!open2 ? (
                    <IoIosArrowDown className='inline' />
                  ) : (
                    <IoIosArrowUp className='inline'/>
                  )}
          </p>
          <ul className={`${!open2 ? "hidden" : "block"}`}>
            <li className='pl-10 pt-2'><Link to="/changepassword" className='text-lg'>
            <IoIosArrowForward className="inline" />
            Change Password</Link></li>
            
          </ul>
          </li>
        </ul>
      </div>

      {/* Overlay to Close Sidebar on Click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
