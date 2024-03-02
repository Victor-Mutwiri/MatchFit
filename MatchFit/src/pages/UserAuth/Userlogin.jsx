import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { storeUser } from "../../helpers"
import './Userlogin.css'
import logo from '../../assets/matchfit-black-transparent.png'




const initialUser = { password: '', identifier: ''}
export const UserLogin = () => {
    const [user, setUser] = useState(initialUser)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    // Reset input fields when component mounts
    useEffect(() => {
      setUser(initialUser);

      setTimeout(() => {
        setUser(initialUser);
      }, 0);
    }, []);


    const handleChange = ({target})=>{
      const {name,value} = target
      setUser((currentUser)=>({...currentUser,
        [name]: value}))
    }

    //Toggle password Visibility
    const handleTogglePassword = () => {
      setShowPassword(!showPassword); // Toggle password visibility
    }


    const handleLogin = async (event)=>{
      event.preventDefault();

      const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
      const url = `${baseUrl}/auth/local`

      /* const url = `http://localhost:1337/api/auth/local` */
      try {
        if (user.identifier && user.password) {
          const { data } = await axios.post(url, user);
          if (data.jwt) {
            storeUser(data);
            toast.success("Logged in successfully!", {
              hideProgressBar: true,
            });
            setUser(initialUser);
            navigate("/userLanding");
          }
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
            <h3>Create an Account or Sign In.</h3>
            <p>Create an account or sign in. By continuing, you agree to our Terms of Use and Privacy Policy.</p>
            <div className="socials">
                <button><i className='bx bxl-google'></i> Sign in with Google</button>
                <button><i className='bx bxl-facebook'></i> Sign in with Facebook</button>
            </div>
            <p className='or'>or</p>
            <form onSubmit={handleLogin}>
            <input type="email" name="identifier" value={user.identifier} placeholder="Enter Email..." onChange={handleChange} autoComplete='off'/>
                  <div className="passwordInput">
                    <input type={showPassword ? "text" : "password"} name="password" value={user.password} placeholder="Enter Password..." onChange={handleChange} autoComplete='off'/>
                    <i className='bx bxs-show' onClick={handleTogglePassword}/>
                  </div>
                  <button type="submit" /* onClick={handleLogin} */>Login</button>
                  <h4>Click <Link to='/UserRegistration'>here</Link> to Sign up</h4>
            </form>
        </section>
    </div>
  )
}
