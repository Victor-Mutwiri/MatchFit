import './Home.css'
import interview from '../../assets/interview.jpg'
import software from '../../assets/Code.jpg'
import data from '../../assets/Data.jpg'
import sales from '../../assets/Sales.jpg'
import marketing from '../../assets/Marketing.jpg'
import customer from '../../assets/Customer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <div className="home">
        <h2>Connecting Talent with Opportunity</h2>
        <section className="top">
            <img src={interview} alt="interview" width={350}/>
            <div>
                <h4>Let's Find Jobs for You</h4>
                <p>Any industry. Any location. Any experience level.</p>
            </div>
        </section>
        <hr />
        <section className="middle">
            <h3>Job search made easy on MatchFit</h3>
            <p>Delivering curated insights and confidential dialogue, empowering your journey to success</p>
            <div className='icons'>
                <div>
                    <div className='borders'>
                        <a href="/jobs"><i className='bx bx-clipboard'/></a>
                    </div>
                    <h4>Find and apply to jobs</h4>
                </div>
                <div>
                    <div className='borders'>
                        <a href="#"><i className='bx bx-buildings'/></a>
                    </div>
                    <h4>Post Jobs</h4>
                </div>
            </div>
        </section>
        <section className="bottom">
            <h3>Popular Searches</h3>
            <div className='popular'>
                <div className="jobs">
                    {/* <img src={software} alt="Software Engineer" width={50}/> */}
                    <FontAwesomeIcon icon={faLaptop} size="lg" />
                    <a href="#">Software Engineer</a>
                </div>
                <div className="jobs">
                    {/* <img src={sales} alt="Sales" width={40}/> */}
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    <a href="#">Sales</a>
                </div>
                <div className="jobs">
                    <FontAwesomeIcon icon={faMicrophone} size="lg" />
                    <a href="#">Marketing</a>
                </div>
                <div className="jobs">
                    <FontAwesomeIcon icon={faHeadset} size="lg" />
                    <a href="#">Customer Service</a>
                </div>
            </div>
        </section>
    </div>
  )
}
