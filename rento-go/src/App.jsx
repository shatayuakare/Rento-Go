import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components 
import Header from './pages/Header'
import Footer from './pages/Footer'

// Authorization pages
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

// content pages
import Error from './pages/Error'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cars from './pages/Cars'
import Bike from './pages/Bike'
import Location from './pages/Location'

// Dashboard sub-pages
import Dashboard from './pages/Dashboard'
import Dash from './pages/dashboard/Dash'
import Profile from './pages/dashboard/Profile'
import Orders from './pages/dashboard/Orders'
import InnerCart from './components/InnerCart'
import ShareVehicle from './pages/ShareVehicle'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='bg-zinc-50 text-zinc-800'>
        <Routes>
          <Route path='/*' element={<Error />} />
          <Route index element={<Home />} />

          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:id' element={<InnerCart />} />
          <Route path='/bikes' element={<Bike />} />
          <Route path='/bikes/:id' element={<InnerCart />} />
          <Route path='/share' element={<ShareVehicle />} />

          <Route path='/about' element={<About />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={<Dashboard />} >
            <Route path="/dashboard/" element={<Dash />} />
            <Route path='/dashboard/myprofile' element={<Profile />} />
            <Route path='/dashboard/myorder' element={<Orders />} />
            {/* <Route path='/dashboard/myorder' element={<Orders />} /> */}
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App