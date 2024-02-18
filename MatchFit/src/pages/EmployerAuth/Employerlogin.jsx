
import { useState } from 'react';
import './login.css'
import logo from '../../assets/matchfit-transparent-logo.png'
import axios from 'axios'

const initialUser = {password: '', identifier: ''}
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
      } catch (error) {}
    }
    return (
        <div className="jobseeker">
        <img src={logo} alt="JobseekerLogin" width={100}/>
        <section className="logincontainer">
            {/* <h3>Create an Account or Sign In.</h3>
            <p>Create an account or sign in. By continuing, you agree to our Terms of Use and Privacy Policy.</p>
            <div className="socials">
                <button><i className='bx bxl-google'></i> Sign in with Google</button>
                <button><i className='bx bxl-facebook'></i> Sign in with Facebook</button>
            </div>
            <p className='or'>or</p> */}
            <h3>Login:</h3>
            <form>
                <input type="email" name="identifier" value={user.identifier} placeholder="Enter Email..." onChange={handleChange}/>
                <input type="password" name="password" value={user.password} placeholder="Enter Password..." onChange={handleChange}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </section>
    </div>
    )
}