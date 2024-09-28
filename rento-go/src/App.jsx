import React from 'react'
import "./App.css"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// components 
import Header from './pages/Header'
import Footer from './pages/Footer'

// Authorization pages
import { useAuth } from './context/AuthProvider';
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
import Admin from './pages/Admin';
import Vehicles from './pages/admin/vehicles/Vehicles';
import ViewsVehicles from './pages/admin/vehicles/ViewsVehicles';



const App = () => {
  const [authUser, setAuthUser] = useAuth()
  setAuthUser(authUser)

  return (
    <BrowserRouter>

      <Header />
      <main className='bg-zinc-50 text-zinc-800'>
        <Routes>
          <Route path='/*' element={<Error />} />
          <Route index element={<Home />} />
          <Route path='/admin' element={authUser ? <Admin /> : <Navigate to={'/login'} />} >
            <Route path='/admin/vehicles' element={authUser ? <Vehicles /> : <Navigate to={'/login'} />} >
              <Route path='/admin/vehicles' element={authUser ? <ViewsVehicles /> : <Navigate to={'/login'} />} />
              {/* <Route path='/admin/vehicles/' element={<ViewsVehicles />} /> */}
              {/* </Route> */}
            </Route>
          </Route>

          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:id' element={<InnerCart />} />
          <Route path='/bikes' element={<Bike />} />
          <Route path='/bikes/:id' element={<InnerCart />} />
          <Route path='/share' element={<ShareVehicle />} />

          <Route path='/about' element={<About />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to={"/"} />} />
          <Route path='/register' element={!authUser ? <Register /> : <Navigate to={"/"} />} />

          <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={"/"} />} >
            <Route index element={authUser ? <Dash /> : <Navigate to={"/login"} />} />
            <Route path="/dashboard/*" element={<Error />} />
            <Route path='/dashboard/myprofile' element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
            <Route path='/dashboard/myorder' element={authUser ? <Orders /> : <Navigate to={"/login"} />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <ToastContainer position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce />
    </BrowserRouter>
  )
}

export default App