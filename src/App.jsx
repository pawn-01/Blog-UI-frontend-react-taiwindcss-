import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Posts from './component/Posts'
import Home from './page/Home'
import Postpage from './page/Postpage'
import Login from './page/Login'
import Register from './page/Register'
import Layout from './page/Layout'
import Create from './page/Create'
import Postviewpage from './page/Postviewpage'
import Editpage from './page/Editpage'
import Allpostuser from './page/Allpostuser'
import Notfound404page from './page/Notfound404page'


const App = () => {
 
  return (
        <>
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                  <Route index element={<Postpage />} />
                  <Route path='login' element={<Login/>} />
                  <Route path='register' element={<Register/>} />
                  <Route path='posts/:id' element={<Postviewpage/>}/>
                  <Route path='edit/:id' element={<Editpage />} />
                  <Route path='create' element={<Create/>}/>
                  <Route path='user/:id' element={<Allpostuser/>} />
                  <Route path='*' element={<Notfound404page/>} />
             </Route>
             
            </Routes>
         </BrowserRouter>
        </>
  )
}

export default App