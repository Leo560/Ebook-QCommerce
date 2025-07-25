import React, { useEffect, useState } from 'react'
import Login from './Login';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';
export default function Navbar() {

  const [authUser,setAuthUser]=useAuth()

  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }



  },[])



  
    const navItems=(<>
     <li> 
        <a href='/'>Home</a>
        </li>
        <li> 
        <a href='/course'>Course</a>
        </li>
        <li> 
        <a>Contact</a>
        </li>
        <li> 
        <a>About</a>
        </li>
    </>);
  return (
   <>

  <div className={`w-full mx-auto md:px-20 px-4 z-50 bg-white fixed top-0 left-0 right-0 ${
    sticky?"sticky-navbar shadow-md  duration-300 transition-all ease-in-out":""
  }` }>
   <div className="navbar text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow content-center ">
          {navItems}
      </ul>
    </div>
    <Link className=" text-2xl font-bold cursor-pointer" to="/">EpicTome</Link>
  </div>
  <div className="navbar-end space-x-3">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
 
    </ul>
  </div>
  <div className='hidden md:block'>
  <label className="input px-3 py-1 border rounded-md flex items-center gap-2 bg-white shadow border-gray-200">
  <input type="text" className="grow outline-none" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  {
    authUser?(<Logout/>):(
       <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md duration-300 cursor-pointer "
    onClick={()=>document.getElementById("my_modal_3").showModal()}
    >Login</a>
    <Login/>
  </div> 
  )}

</div>
</div>
</div> 
   </>
  )
}
