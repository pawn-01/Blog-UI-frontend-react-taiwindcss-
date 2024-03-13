import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Posts from '../component/Posts';
import { ColorRing } from 'react-loader-spinner'

const Allpostuser = () => {
    const { id } = useParams();
    const [first, setfirst] = useState(false);
    const [posts, setposts] = useState([]);
    const [loader, setloader] = useState(true);

    useEffect(()=>{
     async function backend(){
      const res = await axios.get(`${import.meta.env.VITE__URL}/userpost/${id}`);
         if(res.data.a==1){
             console.log(res.data.id)
             setposts(res.data.array);
           } 
         else{
            setfirst(true);
          }
          setloader(false)
        }

        backend();
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

    if(first){
        return <div class="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">No posts :)</div>
    }

  return (
    <div><div class="divide-y rounded-lg border">
    <div class="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
    {posts.length>0 && posts.map(post=>(
      <Posts {...post}/>
        ))}
    </div>
    </div></div>
  )
}

export default Allpostuser;