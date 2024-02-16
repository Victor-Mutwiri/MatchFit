import './login.css'
import logo from '../../assets/matchfit-black-transparent.png'

export const JobseekerLogin = () => {
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
            <form action="">
                <input type="email" placeholder="Email" />
                <button>Continue with Email</button>
            </form>
        </section>
    </div>
  )
}
