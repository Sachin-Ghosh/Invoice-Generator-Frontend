// ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from "next/link";
import { getCookie } from "../utils/myCookie";
import { useRouter } from 'next/router';

const ProfilePage = () => {

  const router = useRouter();
  const {  token, authUser } = useAuth();


  React.useEffect(() => {
    // console.log("token", token);
     const token = getCookie("token");

    if (!token) {
      router.push("/login");
    }
  }, []);



  return (
    <div className=" bg-gradient-to-r from-cyan-900 to-cyan-950 min-h-screen mx-auto px-4 py-8 select-none">
      <div className="text-sm px-8 breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="px-8 py-8 w-1/2 ml-32 ">
        <div className="card rounded bg-white ">
          <div className="card-body">
            <h1 className=" text-bold shadow-2xl  bg-slate-500  rounded-lg  pt-4 mt-4 ml-2 pb-5 pr-5 pl-5 text-5xl text-white text font-semibold mb-6">
              PROFILE
            </h1>
            <div className=' pl-8 pt-4 pb-4 rounded-lg bg-slate-500'>
            <p className=" text-white text-xl font-semibold mb-2">
              Company Name: {authUser?.companyName}
            </p>
            <p className="mb-2 text-white text-xl font-semibold">Role: {authUser?.role}</p>
            <p className="mb-2  text-white text-xl font-semibold">Email ID: {authUser?.email}</p>
            <p className="mb-2 text-white text-xl font-semibold">Phone Number: {authUser?.phoneNumber}</p>
          </div>
          </div>
        </div>
        <br /> <br />
      </div>
    </div>
  );
};

export default ProfilePage;