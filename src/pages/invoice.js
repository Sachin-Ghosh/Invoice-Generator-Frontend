import React, { useState } from 'react';
// import InvoicePDF from './InvoicePDF';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import dynamic from 'next/dynamic';
const InvoicePDF = dynamic(() => import('../components/InvoicePdf'));

export default function Invoice() {

  const [customerName, setCustomerName] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState();
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
      // Handle success or display the generated invoice
    } catch (error) {
      console.error('Error generating invoice:', error);
      // Handle error
    }
  };

  return (
    
    <div className=" bg-gradient-to-r from-cyan-900 to-cyan-950 gap-x-60 px-4 py-8">
     <div className='flex justify-between pt-2 bg-white bg-opacity-25 mb-3 rounded-xl mt-11'>
      <h1 className=' text-bold shadow-2xl bg-cyan-50 bg-opacity-65 rounded-lg  pt-4 mt-4 ml-4 pb-5 pr-5 pl-5 text-3xl  text-neutral font-semibold mb-6 flex align-middle gap-3'><LiaFileInvoiceDollarSolid size={45} />Invoice Generator</h1>
      </div>
      {/* Form Section */}
      <div className='flex align-middle gap-x-60 px-4 py-8 '>
      <div className=" w-80  bg-white">
    <div className="p-8 rounded-lg shadow-lg">
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
      <div className="w-1/2 mt-24">
      {/* <div className="h-full flex items-center justify-center"> */}
    <InvoicePDF
        invoice={{
          customerName,
          productName,
          quantity,
          unitPrice,
          totalPrice,
          paymentStatus,
        }}
      />
      {/* </div> */}
      </div>
      </div>
  </div>
  );
}
