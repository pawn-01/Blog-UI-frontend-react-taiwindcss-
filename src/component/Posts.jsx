import React from 'react'
import { format } from "date-fns";
import { Link } from 'react-router-dom';

const Posts = ({_id,title, summary,cover, createdAt , author}) => {
  
  return (
    <>
    {null && <div className='flex gap-[10px] mb-[3rem] w-[100%] max-md:respo'>
      <div className="w-[40%] h-[15rem]  min-w-[40%] rounded overflow-hidden shadow-lg max-md:img"> 
         <Link to={`/posts/${_id}`}>
            <img className="w-full h-full object-fill" src={`${import.meta.env.VITE__URL}/${cover}`} alt='image'/>
         </Link>
       </div>
         
         <div>
            <h2 className='font-bold text-[2rem]'>
              <Link to={`/posts/${_id}`}>
              {title}
              </Link>
            </h2>
            <div className='flex gap-[15px] '>
            <a href='#' className='text-[#333] text-[0.7rem] font-bold '>{author?.username}</a>
            <time className='text-[#888] text-[0.7rem] font-bold'>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
            </div>
            <time></time>
            <h3 className='my-[10px] text-clip'>{summary}</h3>
         </div>
      </div>}

      <div className='m-[1rem] rounded-md shadow-2xl  bg-[#bed6c5]'>
        <div class="mx-auto flex w-full items-center justify-center sm:py-1 mt-[1rem]">
            <Link to={`/posts/${_id}`}>
            <img
                src={`${import.meta.env.VITE__URL}/${cover}`}
                width="400"
                height="500"
                alt="Image"
                class="aspect-video overflow-hidden rounded-xl object-fill object-center"
              />
            </Link>
              
          </div>

          <div class="mx-auto flex w-full items-center justify-start p-4 sm:p-8 overflow-hidden">
              <div class="space-y-2">
            <h3 class="text-xl font-bold ">
            <Link to={`/posts/${_id}`}>{title}</Link>
            </h3>
              <div className='flex gap-[15px] '>
            <a href='#' className='text-[#333] text-[0.7rem] font-bold '>@ {author?.username}</a>
            <time className='text-[#888] text-[0.7rem] font-bold'>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
            </div>
                <p class="text-sm text-black">
                {summary}
                </p>
              </div>
         </div>

      </div>
    </>
  )
}

export default Posts