import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userinfo } from '../user';



const Create = () => {
    const navi = useNavigate();
    const [title, settitle] = useState('');
    const [summary, setsummary] = useState('');
    const [files, setfiles] = useState('');
    const [content, setcontent] = useState('');
    const [redirect, setredirect] = useState(false);
    const user  = useRecoilValue(userinfo);
    console.log(user);

    async function Createpost(e){
      const data = new FormData();
      data.set('title',title);
      data.set('summary',summary);
      data.set('file',files[0]);
      data.set('content',content)
      console.log(files);
        e.preventDefault();
        const res = await axios.post(`${import.meta.env.VITE__URL}/create`,data,{headers:{"token":localStorage.getItem("token")}},{withCredentials:true})
        console.log(res.statusText);
        if(res.data.a==1){
            setredirect(true);
        }
    }

    if(redirect || !user){
        return <Navigate to={'/'} />   
    }
   

  return (
       <>
       <div className='flex justify-center items-center'>
       <form action='' className='flex flex-col justify-center items-center Screen w-[60%] phone:w-[90%]'>
          <input type='text' value={title} placeholder='title max words should be less than 100' maxLength={100}  onChange={(e)=>{settitle(e.target.value)}}  className='input' />
          <input type='text' placeholder='summary max words should be less than 200' value={summary} maxLength={200} onChange={(e)=>{setsummary(e.target.value)}}  className='input'/>
          <input type='file' className='input' onChange={(e)=>{setfiles(e.target.files)}}/>
          <ReactQuill theme="snow" value={content} onChange={setcontent}  className='input border-[0] p-[0]'/>
          <button className='button mt-[5px]' onClick={Createpost}>Create post</button>
        </form>
       </div>
     </>
  )
}

export default Create