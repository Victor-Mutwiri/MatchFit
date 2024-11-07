import './About.css';
import CountUp from 'react-countup'
import teamImage from '../../assets/interview.jpg';
import missionImage from '../../assets/interview.jpg';

export const AboutUs = () => {
  return (
    <div className="about-us">
      {/* <h2>About MatchFit</h2> */}
      <section className="mission">
        <div className="mission-text">
          <h3>Our Mission</h3>
          <p>
            At MatchFit, we’re dedicated to connecting talented individuals with the right opportunities. Our platform streamlines the job search process, making it easier for candidates to find positions that align with their skills, experiences, and career aspirations. We work closely with reputable companies across various industries, from technology and finance to marketing and customer service, ensuring quality job listings and diverse career paths.
          </p>
        </div>
        <img src={missionImage} alt="Mission" className="mission-image" />
      </section>
      
      <section className="vision">
        <h3>Our Vision</h3>
        <p>
          We believe in a world where talent meets opportunity seamlessly, creating a powerful synergy that drives professional growth and company success. Our vision is to become a leading platform in talent acquisition, known for reliability, diversity, and fostering meaningful connections.
        </p>
      </section>

      <section className="values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Integrity:</strong> We are committed to transparency and honesty in every job listing and partnership.</li>
          <li><strong>Inclusivity:</strong> We strive to provide opportunities for everyone, regardless of background or experience level.</li>
          <li><strong>Innovation:</strong> We leverage technology to simplify the job search and application process, making it efficient and user-friendly.</li>
        </ul>
      </section>

      <section className="partners">
        <h3>Our Trusted Partners</h3>
        <p>
          We collaborate with industry-leading companies like Microsoft, Savannah Informatics, I&M Bank, and many more. Our partnerships ensure that we offer diverse, quality job listings across various sectors, helping job seekers find roles with reputable employers.
        </p>
      </section>

      <section className="statz">
        <div className="stat">
          <h4><CountUp end={100} duration={4} suffix="+" /></h4>
          <p>Partner Companies</p>
        </div>
        <div className="stat">
          <h4><CountUp end={10000} duration={4} suffix="+" /></h4>
          <p>Registered Visitors</p>
        </div>
        <div className="stat">
          <h4><CountUp end={500} duration={4} suffix="+" /></h4>
          <p>Job Listings</p>
        </div>
      </section>
    </div>
  );
};
