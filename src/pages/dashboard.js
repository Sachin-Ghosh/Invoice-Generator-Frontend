

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next.js for navigation
import { getCookie } from "../utils/myCookie";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { MdDashboardCustomize,MdOutlineInventory } from "react-icons/md";


const Dashboard = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const [ProductData, setProductData] = useState(0); // State for total quantities
  const [totalProducts, setTotalProducts] = useState(0); // State for total sales
  const [latestProducts, setLatestProducts] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');


 

    // Sample data for recent activities
    const recentActivities = [
      {
        id: 1,
        action: 'Generated invoice',
        timestamp: '2024-03-01T12:00:00Z',
      },
      {
        id: 2,
        action: 'Updated invoice',
        timestamp: '2024-03-01T09:30:00Z',
      },
      {
        id: 3,
        action: 'Added a product',
        timestamp: '2024-03-01T15:45:00Z',
      },
    ];

  React.useEffect(() => {
    // console.log("token", token);
    const token = getCookie("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  // Fetch total quantities from the backend
  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}api/invoices`);
        if (!response.ok) {
          throw new Error('Failed to fetch total quantities');
        }
        const { totalCount } = await response.json();
        setProductData(totalCount);
      } catch (error) {
        console.error('Error fetching total quantities:', error);
      }
    };

    fetchInvoiceData();
  }, []);

  // Fetch total sales from the backend
  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}api/invoices`);
        if (!response.ok) {
          throw new Error('Failed to fetch total products');
        }
        const data = await response.json();
        setInvoices(data.invoices);
        
        // Calculate total quantity
        const totalQuantity = data.invoices.reduce((total, invoice) => total + invoice.quantity, 0);
        setTotalQuantity(totalQuantity);
      } catch (error) {
        console.error('Error fetching total sales:', error);
      }
    };

    fetchTotalProducts();
  }, []);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}api/invoices`);
        if (!response.ok) {
          throw new Error('Failed to fetch latest products');
        }
        const { invoices } = await response.json();
        setLatestProducts(invoices);
      } catch (error) {
        console.error('Error fetching latest products:', error);
      }
    };

    fetchLatestProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = latestProducts.filter(invoice =>
    invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);


  return (
    <div className="bg-gradient-to-r from-violet-800 to-purple-300 select-none min-h-screen mx-auto px-8 py-16 ">
      
      <h1 className=" text-bold  bg-white   rounded-lg pt-4 mt-7 ml-3 pb-5 pr-5 pl-5 text-3xl text-neutral font-semibold mb-6 flex align-middle">
          <MdDashboardCustomize   size={45}/>
        ADMIN DASHBOARD</h1>
        {/* {isLoggedIn && (
          <button onClick={handleLogout} className="text-gray-600 hover:text-red-500">
            Logout
          </button>
        )} */}
     
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-purple-300  to-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-black bg-gradient-to-r from-white to-purple-300 rounded-xl pl-3 mb-3 pb-2 pt-2 shadow-2xl font-bold">
            Invoice Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-white to-purple-300 rounded-xl p-3 shadow-2xl">
              <h3 className="text-lg font-semibold text-black">
                Total Invoices :
              </h3>
              <p className="text-2xl font-bold text-green-600">{ProductData}</p>

              {/* <p className="text-2xl font-bold text-blue-600">{inventoryOverview.totalProducts}</p> */}
            </div>
            <div className="bg-gradient-to-r from-white to-purple-300 rounded-xl p-3  ml-9 shadow-2xl">
              <h3 className="text-lg font-semibold text-black">
                Total Products :
              </h3>
              <p className="text-2xl font-bold  text-green-600">{totalQuantity}</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-white bg-slate-500 rounded-xl pl-3 mb-3 shadow-2xl pb-2 pt-2 font-bold">
            Recent Activities
          </h2>
          <ul className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="py-2">
                <p className="text-sm text-gray-600">{activity.action}</p>
                <p className="text-xs text-gray-400">
                  {new Date(activity.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
      </section>

      <section className="mt-10 mb-8 flex justify-start items-center ">
        <div className='rounded-3xl bg-gradient-to-r from-purple-300  to-white '>
        <label className="input input-bordered flex items-center gap-2 bg-transparent text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          <input type="text" className="grow text-gray-800 placeholder:text-black placeholder:opacity-45" placeholder="Search by Company name" value={searchQuery} onChange={handleSearch} />
          <span className="badge badge-info bg-green-500">Search</span>
        </label>
        </div>
      </section>
      <section>
      <div className="bg-gradient-to-r from-purple-300  to-white p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-xl text-black bg-gradient-to-r from-white to-purple-300 rounded-xl pl-3 mb-3 shadow-2xl pb-2 pt-2 font-bold">Latest Invoices</h2>
        
        {filteredProducts.length > 0 ? (
    <table className="w-full  bg-gradient-to-r from-white to-purple-300 rounded-xl pl-3 mb-3 shadow-2xl">
      <thead>
        <tr>
        <th className="text-left text-black pl-3">No.</th>
        <th className="text-left text-black" >Company Name</th>
          <th className="text-left text-black" text-black>Product</th>
          <th className="text-left text-black">Unit Price</th>
          <th className="text-left text-black">Quantity</th>
          <th className="text-left text-black">Payment Status</th>
        </tr>
      </thead>
      <tbody className='text-black'>
        {filteredProducts.map((invoice, index) => (
          <tr key={invoice.id}>
                      <td className="pl-3 ">{index + 1}</td>
          <td>{invoice.customerName}</td>
            <td>{invoice.productName}</td>
            <td>{invoice.unitPrice}</td>
            <td>{invoice.quantity}</td>
            <td>{invoice.paymentStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className='  rounded-3xl bg-gradient-to-r from-black to-purple-300 pl-3 mb-3 shadow-2xl'>No invoices found</p>
  )}
  </div>
      </section>
    </div>
  );
};

export default Dashboard;
