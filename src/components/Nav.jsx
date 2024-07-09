import React, { useState } from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'
import {  FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className='flex bg-brandbrown/60 justify-between items-center py-3 w-full sticky top-0'>

        {/*mobile nav*/ }
        <button onClick={()=>{setShow(!show)}} className='block md:hidden'>
            <RxHamburgerMenu className='text-white text-2xl ml-5'/>
        </button>
        {show&&
        <nav className='fixed h-dvh p-12 top-0 bg-brandbrown/60 w-2/3 md:hidden z-50 transition-all duration-700 ease-in-out transform  ' >
            <button onClick={()=>{setShow(!show)}} className='absolute right-9'>
            <IoMdClose className='text-white text-2xl ml-5'/>
        </button>
        <ul className='space-y-3 text-white'>
            <li>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
        </ul>
        </nav>}
        
        <nav className='mx-10 hidden md:block' >
        <ul className='flex space-x-3 text-white'>
            <li>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
        </ul>
        </nav>

        <div className="logo">
            <img src="/assets/Frame 13.png" alt="logo" className='w-[100px] lg:w-full' />
        </div>
        <div className="flex justify-center items-center mr-5 space-x-5">
            <div className=' hidden md:flex border border-brandbrown rounded-full p-3 text-slate-200  mr-5'>
                <input type="text" className='bg-transparent outline-none border-none' />
                <MdOutlineSearch className='text-2xl'/>
            </div>
            <Link to='/cart' className='p-3 rounded-full bg-brandbrown hover:bg-brandbrown/20 border border-slate-400'>
            <IoCartOutline className="text-white md:text-2xl"/>
            </Link>
            <Link to='/profile' className='p-3 rounded-full bg-brandbrown hover:bg-brandbrown/20 border border-slate-400'>
            <FaUser className="text-white md:text-2xl"/>
            </Link>
        </div>
    </div>
  )
}

export default Nav