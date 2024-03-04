import './Navbar.css'
import logo from '../assets/matchfit-transparent-logo.png'
import {Link} from 'react-router-dom'
/* import LoginSignup from '../pages/LoginSignup/login.jsx' */

export const Navbar = () => {
  return (
    <header>
        <div className="logo left">
            <a href=""></a>
            <Link to='/'><img src={logo} alt="logo" width={140}/></Link>
            {/* <img src={logo} alt="logo" width={140}/> */}
        </div>
        <div className="left">
            {/* <li><Link to='/UserLogin'>Suggested Jobs</Link></li> */} {/* Feature paused for now */}
            <li><Link to='/jobs'>Suggested Jobs</Link></li>
            <li><Link to='/EmployerLogin'>Post a Job</Link></li>
        </div>
        <div className="center">
            {/* <li><Link to='/UserLogin'><i className='bx bxs-user'/> Job Seekers</Link></li> */} {/* Feature paused for now */}
            <li><Link to='/jobs'><i className='bx bxs-user'/> Job Seekers</Link></li>
            <li><Link to='/EmployerLogin'><i className='bx bx-buildings'/> Employers</Link></li>
        </div>
        <i className='bx bx-menu right'/>
    </header>
  )
}


/* [
  {"name": "Email"},
  {"name": "Website"}
] */
