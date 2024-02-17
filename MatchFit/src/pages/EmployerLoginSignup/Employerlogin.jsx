import {useNavigate} from 'react-router-dom'
import './login.css'
import logo from '../../assets/matchfit-transparent-logo.png'

export const EmployerLoginSignup = ()=>{
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
    
        try {
          const response = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              identifier: email,
              password: password,
            }),
          });
    

          console.log('Response status:', response.status);


          if (response.ok) {
            // Handle successful login
            const data = await response.json();
            console.log('Login successful:', data);

            // Store token in local storage (optional)
            localStorage.setItem('token', data.jwt);

            // Redirect user to another page
            navigate('/EmployerLanding');

          } else {
            // Handle login error
            const errorData = await response.json();
            console.error('Login error:', errorData.message[0].messages[0].message);
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      };
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
                <input type="email" name="email" placeholder="Enter Email..." />
                <input type="password" name="password" placeholder="Enter password..." />
                <button>Login</button>
            </form>
        </section>
    </div>
    )
}