
import { useState } from 'react';
import './login.css'
import logo from '../../assets/matchfit-transparent-logo.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const initialUser = { password: '', identifier: ''}
export const EmployerLogin = ()=>{
    const [user, setUser] = useState(initialUser)

    
    const handleChange = ({target})=>{
      const {name,value} = target
      setUser((currentUser)=>({...currentUser,
        [name]: value}))
    }
    const handleLogin = async ()=>{
      const url = `http://localhost:1337/api/auth/local`
      try {
        if(user.identifier && user.password){
          const res = await axios.post(url, user)
          console.log(res)
        }
      } catch (error) {
        toast.error(error.message,
          {hideProgressBar: true})
      }
    }
    return (
        <div className="jobseeker">
          <img src={logo} alt="JobseekerLogin" width={100}/>
          <section className="logincontainer">
              <h3>Login:</h3>
              <form>
                  <input type="email" name="identifier" value={user.identifier} placeholder="Enter Email..." onChange={handleChange}/>
                  <input type="password" name="password" value={user.password} placeholder="Enter Password..." onChange={handleChange}/>
                  <button onClick={handleLogin}>Login</button>
                  <h4>Click <Link to='/EmployerRegistration'>here</Link> to Sign up</h4>
              </form>
          </section>
    </div>
    )
}