import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { JobListings } from './pages/Jobs/JobListings';
import JobDetail from './pages/Jobs/JobDescription';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/jobs' element={<JobListings/>}/>
        <Route path='/job/:id' element={<JobDetail/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
