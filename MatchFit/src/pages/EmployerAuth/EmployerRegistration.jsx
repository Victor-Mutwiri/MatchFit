import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/matchfit-black-transparent.png'
import axios from 'axios'
import { toast } from 'react-toastify';

const initialUser = {username: "", email: "", password: ""}

export const EmployerRegistration = () => {
  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate()

  const signup = async()=>{
    try {
      const url = `http://localhost:1337/api/auth/local/register`
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user)
        if(res.status === 200){
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          })
          setUser(initialUser)
          navigate('/EmployerLogin')
        }
    } else {
      toast.error("Please fill in all fields", {hideProgressBar: true})
    }
  }catch (error) {
      toast.error(error.message, {hideProgressBar: true})
    }
  }
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
