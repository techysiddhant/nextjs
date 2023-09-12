/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from "axios";
import toast from 'react-hot-toast/headless';
import { set } from 'mongoose';
function page() {
 const [user, setUser] = useState({
  email: "",
  password: "",
 });
 const router = useRouter();
 const [buttonDisabled, setButtonDisabled] = useState(false);
 const [loading, setLoading] = useState(false);
 useEffect(() => {
  if (user.email.length > 0 && user.password.length > 0) {
   setButtonDisabled(false);
  } else {
   setButtonDisabled(true);
  }
 }, [user])
 const onLogin = async () => {
  try {
   setLoading(true);
   const response = await axios.post("/api/users/login", user);
   console.log("login success", response.data);
   toast.success("Login success");
   router.push("/profile");
  } catch (error: any) {
   console.log("login failed", error.message);
   toast.error(error.message);
  } finally {
   setLoading(false);
  }
 }
 return (
  <div className='flex flex-col items-center justify-center min-h-screen py-2'>
   <h1>{loading ? "Processing" : "Login"}</h1>
   <hr />
   <label htmlFor="email">
    Email
   </label>
   <input type="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
    placeholder='Email'
    className='p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
   />

   <label htmlFor="password">
    Password
   </label>
   <input type="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
    placeholder='Password'
    className='p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
   />
   <button onClick={onLogin} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'

   >login here</button>
   <Link href='/signup'>
    Visit Signup page
   </Link>
  </div>
 )
}

export default page