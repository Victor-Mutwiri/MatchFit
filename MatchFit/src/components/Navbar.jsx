import './Navbar.css'
import logo from '../assets/matchfit-transparent-logo.png'

export const Navbar = () => {
  return (
    <header>
        <div className="logo left">
            <img src={logo} alt="logo" width={140}/>
        </div>
        <div className="left">
            <li><a href="#">Suggested Jobs</a></li>
            <li><a href="#">Post a Job</a></li>
        </div>
        <div className="center">
            <li><a href="#"><i className='bx bxs-user'/> Job Seekers</a></li>
            <li><a href="#"><i className='bx bx-buildings'/> Employers</a></li>
        </div>
        <i className='bx bx-menu right'/>
    </header>
  )
}
