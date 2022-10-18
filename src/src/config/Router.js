import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../screens/Home'
import News from '../screens/News'
import NewsDetail from '../screens/NewsDetail'
import Detail from '../screens/Detail'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


export default function Router() {
    
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Detail' element={<Detail/>} />
        <Route path='/NewsDetail' element={<NewsDetail/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/*' element={<Navigate to = "/"></Navigate>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
  
}
