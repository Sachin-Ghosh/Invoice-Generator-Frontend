
import React, { useState, useEffect, useRef } from "react";import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { PiUser } from "react-icons/pi";
import { MdDashboardCustomize,MdOutlineInventory } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaShoppingBasket } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { IoQrCodeOutline } from "react-icons/io5";
import Image from "next/image";





const Navbar = () => {
  const { token, logout,authUser } = useAuth();
  // const isAdmin = user && user.role === 'Admin'; // Check if the user is an admin
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ref to the sidebar element
  const sidebarRef = useRef(null);

  // Close sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close sidebar when user clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  // Add event listener to handle clicks outside the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

    <div className=" fixed navbar bg-white "
    style={{ borderBottom: "1.4px solid #a4a4a4" }}>
       {token && (
       <div>
      {/* Menu Icon */}
      <FiMenu className="cursor-pointer " color="#6d28d9" size={40} onClick={toggleSidebar} />

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-44 bg-black  bg-opacity-70 backdrop-blur-sm  p-4 flex flex-col"
        >
          <ul className=" space-y-8 mt-7">
          {authUser?.role === "Admin" && (
            <li>
              
              <Link href="/dashboard" className="text-xl  gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <MdDashboardCustomize  size={24}/>

                  Dashboard
               
              </Link>
            </li>
               )}
            <li>
              
              <Link href="/invoice" className="text-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <LiaFileInvoiceDollarSolid size={24} />

                  Invoice
               
              </Link>
            </li>
            {/* {authUser?.role === "Admin" && ( // Render the report link only for admin users
                  <li>
                    <Link href="/report" className="text-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
                    <BiSolidReport size={24} />

                      Report
                    </Link>
                  </li>
                )} */}
            
          </ul>
        </div>
      )}
      </div>
      )}

      {/* Rest of Navbar */}
      <div className="  ml-3 h-10">
      <Image
      src="/images/bill.png"
      width={60}
      height={50}
      alt="logo"
    />
  </div>
      <div className="flex-1">
        <Link href={token ? (authUser.role === 'Admin' ? '/dashboard' : '/invoice') : '/ '} className="btn btn-ghost normal-case text-4xl text-blue-700 mt-3">
        BillBlaze
        </Link>
      </div>
      <div className="flex-none gap-2">
        
        {!token && (
    <li style={{ listStyleType: 'none' }}>
      <Link href="/signUp" style={{ display: 'none' }}>
        Sign Up
      </Link>
    </li>
  )}
        {!token && (
            <div className="flex-none">
              <Link href="/login" className="flex items-center btn btn-ghost normal-case text-xl text-primary">
              <PiUser size={24}  className="mr-2" />Login
              </Link>
            </div>
            
          )}
        {token && (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full"> */}
                <PiUser className="rounded-2xl" color="#6d28d9"  size={40} />
              {/* <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              /> */}
            {/* </div> */}
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {/* <li>
              <Link href="/login">Login</Link>
            </li> */}
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/signUp">Sign Up</Link>
            </li>
            <li>
            <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
