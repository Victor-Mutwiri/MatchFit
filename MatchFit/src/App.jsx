import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import {EmployerLogin} from './pages/EmployerAuth/Employerlogin'
import { EmployerRegistration } from './pages/EmployerAuth/EmployerRegistration'
import { UserLogin } from './pages/UserAuth/Userlogin';
import { Employerlanding } from './pages/employer/employerlanding';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/EmployerLogin" element={<EmployerLogin />}/>
        <Route path="/JobseekerLogin" element={<UserLogin/>}/>
        <Route path="/EmployerLanding" element={<Employerlanding/>}/>
        <Route path="/EmployerRegistration" element={<EmployerRegistration/>}/>
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
