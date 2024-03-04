import './App.css'
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import {EmployerLogin} from './pages/EmployerAuth/Employerlogin'
import { EmployerRegistration } from './pages/EmployerAuth/EmployerRegistration'
import { UserLogin } from './pages/UserAuth/Userlogin';
import { Employerlanding } from './pages/employer/employerlanding';
import { ToastContainer } from 'react-toastify';
import { Protector } from "./helpers";
import { Userlanding } from './pages/User/Userlanding';
import { UserRegistration } from './pages/UserAuth/UserRegistration';
import { UserProfile } from './pages/User/UserProfile';
import ViewProfile from './pages/User/viewprofile';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/EmployerLogin" element={<EmployerLogin />}/>
        <Route path="/EmployerLanding" element={<Protector Component={Employerlanding} />}/>
        <Route path="/EmployerRegistration" element={<EmployerRegistration/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        {/* <Route path='/userLanding' element={<Protector Component={Userlanding} />}/> */}
        <Route path='/jobs' element={<Userlanding/>}/>
        <Route path='/UserRegistration' element={<UserRegistration/>}/>
        <Route path='/UserProfile' element={<UserProfile setFormData={setFormData} />}/>
        {/* <Route path='/UserProfile' element={<UserProfile/>}/> */}
        <Route path='/ViewProfile' element={<ViewProfile formData={formData} />}/>
        {/* <Route path='/ViewProfile' element={<ViewProfile/>}/> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
