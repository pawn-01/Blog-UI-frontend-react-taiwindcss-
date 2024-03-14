import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { userinfo } from '../user'
import { useRecoilState } from 'recoil'
import Login from './Login'
import Side from '../component/Side'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const navi = useNavigate();
  const[username,setusername] = useRecoilState(userinfo);
 
  useEffect(() => {
     async function backend(){
      const res = await axios.post(`${import.meta.env.VITE__URL}/profile`, {},{headers:{"token":localStorage.getItem("token")}},{withCredentials:true});
      console.log("home " + typeof res.data.a);
      if(res.data.a==1){
         console.log(res.data.decode);
          setusername(res.data.decode);
        }
    }

    backend();
    return()=>{console.log("Home teri mkc")} 

  }, [])

  async function logout(){
     const res = await axios.post(`${import.meta.env.VITE__URL}/logout`,{},{withCredentials:true});
     if(res.data.a==1){
        setusername(null);
        localStorage.removeItem('token');
       navi('/login');
     }
  }


  const user = username?.username;

  return (
    <>
       <div className='flex justify-between items-center pb-[3rem] pt-[0.5rem]' >
         <Link to='/' className='font-bold flex gap-[0.2rem] text-[1.2rem]'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

         DevLogs</Link>
         <div className="ml-auto flex items-center gap-4 sm:gap-6">
          {user && <>
            <Link to='/create' class="text-sm font-medium hover:underline underline-offset-4" >Create new post</Link>
           <div class="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"  onClick={logout}>Logout</div>
           <Link className='h-[2.5rem] w-[2.5rem] bg-[#003663] text-white flex justify-center items-center rounded-full font-extrabold' to={`user/${username.id}`}>{user.charAt(0).toUpperCase()}</Link>
           </>}
          {!user &&
           <>
           <Link to='/login'  class="text-sm font-medium hover:underline underline-offset-4">Login</Link>
           <Link to='/register'  class="text-sm font-medium hover:underline underline-offset-4">Register</Link>
           </>
          }
            </div>
         </div>
    </>
  )
}

export default Home