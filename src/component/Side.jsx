import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Side = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

   function slidepost(){
      window.scrollBy(0, window.innerHeight);
   }

  return (
  <>
  <div class="flex flex-col h-[85vh]">
    <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div class="space-y-3 text-center">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Exploring the {'{ Dev'}
          <Typewriter
            words={['loper', 'elopment', 'code']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}

          /> {' }'}World</h1>
          <p class="text-gray-500 dark:text-gray-400">The official blog website for Coders</p>
        </div>
      </div>
      <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div class="space-y-4 text-center">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Posts</h2>
        </div>
      </div>
    </section>
    <div className='flex justify-between items-center px-[3rem]'>
     <div class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{'</>'}</div>
     <div className='flex flex-col cursor-pointer' onClick={slidepost}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem] h-[3rem] text-center">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
   </svg>
    <div class="text-sm font-medium">All posts</div>
     </div>
    </div>
    </section>
  </main>
  </div>
</>
  )
}

export default Side