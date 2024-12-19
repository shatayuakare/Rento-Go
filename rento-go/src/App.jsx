import React, { Suspense, useEffect } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import axios from 'axios';
import { Cookies } from 'react-cookie';

// components 
import Header from './pages/Header'
import Footer from './pages/Footer'

// Authorization pages
import { useAuth } from './context/AuthProvider';
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

// content pages
import Error from './pages/Error'
import Home from './pages/home/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cars from './pages/vehicles/Cars'
import Bike from './pages/vehicles/Bike'
import Location from './pages/Location'

// Dashboard sub-pages
import Dashboard from './pages/dashboard/Dashboard'
import Dash from './pages/dashboard/Dash'
import Profile from './pages/dashboard/Profile'
import Orders from './pages/dashboard/Orders'
import MyVehicles from './pages/dashboard/MyVehicles'

// admin pages
import Admin from './pages/admin/Admin';
import AdminOrders from './pages/admin/Orders'
import Members from './pages/admin/Members';
import Vehicles from './pages/admin/Vehicles';

import InnerCart from './components/InnerCart'
import ShareVehicles from './pages/ShareVehicles';
import Referal from './pages/Referal';
import Policy from './pages/dashboard/Policy';
import PageLoader from './components/PageLoader';

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  setAuthUser(authUser)

  useEffect(() => {

    window.addEventListener('load', async () => {
      if (!authUser) return;
      const cookie = new Cookies()
      const token = cookie.get("token");
      await axios.post(`http://localhost:8080/auth/relogin/${token}`).then(res => {
        cookie.set("token", res.data.token);
      }).catch(err => console.log(err))
    })
  }, [])



  return (
    <BrowserRouter>

      <Header />
      <Suspense fallback={<PageLoader />}>
        <main className='bg-zinc-50 text-zinc-800 capitalize'>
          <Routes>
            <Route path='/*' element={<Error />} />
            <Route index element={<Home />} />


            <Route path='/admin' element={authUser ? <Admin /> : <Navigate to={'/login'} />} >

              <Route index element={authUser ? <Members /> : <Navigate to={'/'} />} />
              <Route path='/admin/vehicles' element={authUser ? <Vehicles /> : <Navigate to={'/'} />} />
              <Route path='/admin/orders' element={authUser ? <AdminOrders /> : <Navigate to={'/'} />} />

            </Route>



            <Route path='/cars' element={<Cars />} />
            <Route path='/cars/:id' element={<InnerCart />} />
            <Route path='/bikes' element={<Bike />} />
            <Route path='/bikes/:id' element={<InnerCart />} />
            <Route path='/refer' element={<Referal />} />

            <Route path='/about' element={<About />} />
            <Route path='/share/:vehicle' element={<ShareVehicles />} />
            <Route path='/location' element={<Location />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={!authUser ? <Login /> : <Navigate to={"/"} />} />
            <Route path='/register' element={!authUser ? <Register /> : <Navigate to={"/"} />} />

            <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={"/"} />} >
              <Route index element={authUser ? <Dash /> : <Navigate to={"/login"} />} />
              <Route path="/dashboard/*" element={<Error />} />
              <Route path='/dashboard/myprofile' element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
              <Route path='/dashboard/myvehicles' element={authUser ? <MyVehicles /> : <Navigate to={"/login"} />} />
              <Route path='/dashboard/myorder' element={authUser ? <Orders /> : <Navigate to={"/login"} />} />
              <Route path='/dashboard/policy' element={authUser ? <Policy /> : <Navigate to={"/login"} />} />
            </Route>
          </Routes>
        </main>
      </Suspense>
      <Footer />
      <ToastContainer position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce />
    </BrowserRouter >
  )
}

export default App