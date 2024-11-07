import './Navbar.css'
import logo from '../assets/matchfit-transparent-logo.png'
import {Link} from 'react-router-dom'
/* import LoginSignup from '../pages/LoginSignup/login.jsx' */

export const Navbar = () => {
  return (
    <header>
        <div className="mainlogo left">
            <Link to='/'><img src={logo} alt="logo" width={140}/></Link>
            {/* <img src={logo} alt="logo" width={140}/> */}
        </div>
        <div className="">
            <li><Link to='/jobs'>Jobs</Link></li>
        </div>
        {/* <div className="">
            <li><Link to=''>Post a Job</Link></li>
        </div> */}
        <div className="">
            <li><Link to='/about'>About</Link></li>
        </div>
        <i className='bx bx-menu right'/>
    </header>
  )
}
