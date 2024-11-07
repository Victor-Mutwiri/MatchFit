import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { JobListings } from './pages/Jobs/JobListings';
import JobDetail from './pages/Jobs/JobDescription';
import { AboutUs } from './pages/About/About';
import NotFound from './pages/404/NotFound';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/jobs' element={<JobListings/>}/>
        <Route path='/job/:id/:nameSlug' element={<JobDetail/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
