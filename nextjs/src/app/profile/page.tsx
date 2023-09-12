"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
export default function ProfilePage() {
 const [data, setData] = useState("nothing");
 const router = useRouter();
 const logout = async () => {
  try {
   await axios.get('/api/users/logout')
   toast.success('Logout success');
   router.push('/login');
  } catch (error: any) {
   console.log(error.message);
   toast.error(error.message);
  }
 }
 const getUserDetails = async () => {
  const response = await axios.get('/api/users/me');
  console.log(response.data);
  setData(response.data.data._id);
 }
 return (
  <div className="flex 
   flex-col items-center justify-center min-h-screen py-2
   ">
   <h1>Profile</h1>
   <hr />
   <p>Profile page</p>
   <h2 className="m-2 p-2 rounded bg-green-500">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
   <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
   <button onClick={getUserDetails} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Get User Details</button>

  </div>
 )
}