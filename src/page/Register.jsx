import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userinfo } from '../user';

const Register = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setredirect] = useState(false);
  const user = useRecoilValue(userinfo)
  
  async function register(e){
     e.preventDefault();
     const res = await axios.post(`${import.meta.env.VITE__URL}/register`,{
        username,
        password
     })
     console.log(res.statusText);

     if(res.data.a==1){
       setredirect(true);
     }

     else{
       alert("user exist go to login page");
     }
     
  }

  if(redirect || user){
      return <Navigate to='/login' />
  }

  return (
    <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xl mx-auto max-w-sm" data-v0-t="card">
  <div className="flex flex-col p-6 space-y-1">
    <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Sign up</h3>
    <p className="text-sm text-muted-foreground">Enter your username below to login to your account</p>
  </div>
  <div className="p-6">
    <div className="space-y-4">
      <div className="space-y-2">
        <div
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Username
        </div>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Mark smith"
          required=""
          type="text"
          value={username}
          onChange={(e)=>{setusername(e.target.value)}}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <div
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Password
          </div>
  
        </div>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required=""
          type="password"
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
        />
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[100%] bg-[black] text-[white]"
        type="submit"
        onClick={register}
      >
        Sign up
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#c90e0e] text-white">
        Login with Google
      </button>
    </div>
    <div className="mt-4 text-center text-sm">
      Already have an account ? 
      <Link className="underline" to="/login">
        Login
      </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Register