import { useState } from 'react'
import logo from '../../assets/matchfit-black-transparent.png'
import { Link } from 'react-router-dom'
export const EmployerRegistration = () => {
  const [user, setUser] = useState({username: '', email: '', password: ''})
  const signup = ()=>{}
  const handleUserChange = ({target})=>{
    const {name, value} = target;
    setUser((currentUser)=>({...currentUser, [name]: value}))
  }
  return (
    <div className="jobseeker">
          <img src={logo} alt="JobseekerLogin" width={100}/>
          <section className="logincontainer">
              <h3>Sign Up:</h3>
              <form>
                  <input type="text" name="username" value={user.username} placeholder="Enter your full name..." onChange={handleUserChange}/>
                  <input type="email" name="email" value={user.email} placeholder="Enter Email..." onChange={handleUserChange}/>
                  <input type="password" name="password" value={user.password} placeholder="Enter Password..." onChange={handleUserChange}/>
                  <button onClick={signup}>Sign Up</button>
                  <h4>Click <Link to='/EmployerLogin'>here</Link> to login</h4>
              </form>
          </section>
    </div>
  )
}
