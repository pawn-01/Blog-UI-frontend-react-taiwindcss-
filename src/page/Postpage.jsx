import React, { useEffect, useState } from 'react'
import Posts from '../component/Posts'
import axios from 'axios';
import { Audio,ColorRing } from 'react-loader-spinner'
import Side from '../component/Side';


const Postpage = () => {
  const[loader,setloader] = useState(true);
  const [posts, setposts] = useState([]);
  console.log("posts" , posts.length);
  
  useEffect(()=>{
    async function backend(){
     // const res = await axios.get(`${import.meta.env.VITE__URL}/posts`,{});
     const res = await axios.get(`${import.meta.env.VITE__URL}/posts`);
     console.log(res);
      if(res.data.a==1){
         setloader(false);
         setposts(res.data.array);
      }
     }
     

     backend();

      return ()=>{console.log("hi")}       

  },[])
 
   if(loader){
    return <div className='w-[100%] h-[80vh] flex justify-center items-center'>
        <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#000','#000','#000','#000','#000']} ></ColorRing>
    </div>
  
  }

  return (
    <>
      <Side />
      <div class="divide-y rounded-lg border">
        <div class="grid w-full grid-cols-3 items-stretch justify-center divide-x phone:grid-cols-1 tab:grid-cols-2">
        {posts.length>0 && posts.map(post=>(
          <Posts {...post}/>
            ))}
        </div>
        </div>
        
       <div className='flex justify-center items-center'> Made with ❤️ by Pawan</div>

        <div className='flex justify-center items-center border-t gap-4 py-6 w-full phone:gap-3 phone:px-[5px] phone:py-1'>
        <a class="text-xs hover:underline underline-offset-4 phone:w-[45%] phone:text-[10px]" href="#">
        Copyright © 2024. All rights reserved.
      </a>
        <a class="text-xs hover:underline underline-offset-4 phone:w-[40%] phone:text-[10px] phone:text-center" href="#">
        Terms of Service
      </a>
      <a class="text-xs hover:underline underline-offset-4 phone:w-[25%] phone:text-[10px] phone:text-center" href="#">
        Privacy
      </a>
        </div>
   

    {null && <footer class="flex gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <nav class="sm:ml-auto flex gap-4 sm:gap-6 ">
     
    </nav>
  </footer>}

      
    </>
  )
}

export default Postpage