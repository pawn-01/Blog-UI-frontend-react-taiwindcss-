import React, { useEffect } from 'react'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userinfo } from '../user'

const Layout = () => {
  return (
    <>
        <div className='p-[10px] max-w-[100vw] my-[0] mx-[auto]  px-[5rem]  phone:max-w-[500px] phone:p-1 tab:max-w-[900px] tab:p-1'>
            <Home/>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout