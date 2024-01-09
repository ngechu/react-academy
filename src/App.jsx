import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/navbar'
import { Outlet, Route, Routes } from 'react-router'
import Contact from './pages/Contact/Contact'
import Users from './pages/Users/Users'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
      </Route>
    </Routes>

  )
}

export default App
