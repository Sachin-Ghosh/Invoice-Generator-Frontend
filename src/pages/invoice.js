// pages/invoice.js
import React, { useState } from 'react';
// import InvoicePDF from './InvoicePDF';
import { showAlert } from '@/utils/showAlert';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import dynamic from 'next/dynamic';
const InvoicePDF = dynamic(() => import('../components/InvoicePdf'));

export default function Invoice() {

  const [customerName, setCustomerName] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('Pending');

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * unitPrice);
  };

  const handleUnitPriceChange = (e) => {
    const newUnitPrice = parseInt(e.target.value);
    setUnitPrice(newUnitPrice);
    setTotalPrice(quantity * newUnitPrice);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.API_URL}api/invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName,
          productName,
          address,
          date,
          number,
          quantity,
          unitPrice,
          totalPrice,
          paymentStatus,
        }),
      });
      if (!response.ok) {
        throw new Error('Error generating invoice');
      }
      const data = await response.json();
      console.log(data);
      showAlert('Invoice generated successfully!', 'success');
      // Handle success or display the generated invoice
    } catch (error) {
      console.error('Error generating invoice:', error);
      showAlert('Error generating Invoice!', 'error');
      // Handle error
    }
  };

  return (
    
    <div className=" select-none bg-gradient-to-r from-violet-800 to-purple-300  gap-x-40 px-4 py-8">
     <div className='mt-14 '>
      <h1 className=' text-bold  bg-white gap-4 rounded-lg pt-5 ml-4 pb-5 pr-5 pl-5 text-3xl text-neutral font-semibold mb-6 flex align-middle'>
        <LiaFileInvoiceDollarSolid size={45} />BILL GENERATOR</h1>
   </div>
      {/* Form Section */}
      <div className='flex align-middle px-4 py-8 '>
      <div className=" w-100 ml-36 bg-gradient-to-r from-white to-purple-300">
    <div className="p-8 rounded-lg  w-100 shadow-lg">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-black">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="input input-bordered text-white"
        />
      </div>
      <div>
        <label htmlFor="productName" className="block  text-black text-sm font-medium ">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="address" className="block  text-black text-sm font-medium ">Bill To:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="date" className="block  text-black text-sm font-medium ">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="number" className="block text-black text-sm font-medium ">Invoice No:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-black text-sm font-medium ">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="unitPrice" className="block  text-black  text-sm font-medium ">Unit Price:</label>
        <input
          type="number"
          id="unitPrice"
          value={unitPrice}
          onChange={handleUnitPriceChange}
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="totalPrice" className="block text-black text-sm font-medium ">Total Price:</label>
        <input
          type="number"
          id="totalPrice"
          value={totalPrice}
          readOnly
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="paymentStatus" className="block text-black text-sm font-medium ">Payment Status:</label>
        <select
          id="paymentStatus"
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="select select-bordered"
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <button type="submit" className="btn bg-green-500 border-green-500 btn-secondary">Generate Invoice</button>
    </form>
    </div>
      </div>
      <div className=" h-full w-full  flex  items-center justify-center ">
    <InvoicePDF
        invoice={{
          customerName,
          productName,
          address,
          date,
          number,
          quantity,
          unitPrice,
          totalPrice,
          paymentStatus,
        }}
      />
      </div>
      </div>
  </div>
  );
}
