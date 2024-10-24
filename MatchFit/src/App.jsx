import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { Userlanding } from './pages/Jobs/JobListings';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/jobs' element={<Userlanding/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
