import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Cookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify'

// components 
import Header from './pages/Header'
import Footer from './pages/Footer'

// Authorization pages
import { useAuth } from './context/AuthProvider'
import { server } from './utils/Constants';
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))

// content pages
const Error = lazy(() => import('./pages/Error'))
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Cars = lazy(() => import('./pages/vehicles/Cars'))
const Bike = lazy(() => import('./pages/vehicles/Bike'))
// Dashboard pages
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Dash = lazy(() => import('./pages/dashboard/Dash'))
const Profile = lazy(() => import('./pages/dashboard/Profile'))
const Orders = lazy(() => import('./pages/dashboard/Orders'))
const MyGarage = lazy(() => import('./pages/dashboard/MyGarage'))

// admin pages
const Admin = lazy(() => import('./pages/admin/Admin'));
const AllOrders = lazy(() => import('./pages/admin/AllOrders'));
const Members = lazy(() => import('./pages/admin/Members'));
const ContactData = lazy(() => import('./pages/admin/ContactData'));
const Vehicles = lazy(() => import('./pages/admin/Vehicles'));

const InnerCart = lazy(() => import('./components/InnerCart'))
const ShareVehicles = lazy(() => import('./pages/ShareVehicles'))
const Policy = lazy(() => import('./pages/dashboard/Policy'))
const PageLoader = lazy(() => import('./components/PageLoader'))


const App = () => {
  const [authUser, setAuthUser] = useAuth()
  setAuthUser(authUser)

  useEffect(() => {
    window.addEventListener('load', async () => {
      if (!authUser) return;
      const cookie = new Cookies()
      const token = cookie.get("token");
      await axios.post(`${server}/auth/relogin/${token}`).then(res => {
        cookie.set("token", res.data.token);
      }).catch(err => console.log(err))
    })
  }, [])



  return (
    <BrowserRouter>

      <Header />
      <Suspense fallback={<PageLoader />}>
        <main className='bg-zinc-50 text-zinc-800'>
          <Routes>
            <Route path='/*' element={<Error />} />
            <Route index element={<Home />} />

            <Route path='/admin' element={authUser ? <Admin /> : <Navigate to={'/login'} />} >

              <Route index element={authUser ? <Members /> : <Navigate to={'/'} />} />
              <Route path='/admin/vehicles' element={authUser ? <Vehicles /> : <Navigate to={'/'} />} />
              <Route path='/admin/orders' element={authUser ? <AllOrders /> : <Navigate to={'/'} />} />
              <Route path='/admin/contacts' element={authUser ? <ContactData /> : <Navigate to={'/'} />} />
            </Route>

            <Route path='/cars' element={<Cars />} />
            <Route path='/cars/:id' element={<InnerCart />} />
            <Route path='/bikes' element={<Bike />} />
            <Route path='/bikes/:id' element={<InnerCart />} />

            <Route path='/about' element={<About />} />
            <Route path='/share/:vehicle' element={<ShareVehicles />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={!authUser ? <Login /> : <Navigate to={"/"} />} />
            <Route path='/register' element={!authUser ? <Register /> : <Navigate to={"/"} />} />

            <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={"/"} />} >
              <Route index element={authUser ? <Dash /> : <Navigate to={"/login"} />} />
              <Route path="/dashboard/*" element={<Error />} />
              <Route path='/dashboard/myprofile' element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
              <Route path='/dashboard/mygarage' element={authUser ? <MyGarage /> : <Navigate to={"/login"} />} />
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