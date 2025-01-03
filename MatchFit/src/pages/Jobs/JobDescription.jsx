import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './JobDescription.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FiMapPin, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showFullOverview, setShowFullOverview] = useState(false);

  useEffect(() => {
    const fetchJobData = async () => {
      // Check cache before fetching
      const cachedJobs = JSON.parse(localStorage.getItem('cachedJobs'));
      const cachedJob = cachedJobs?.find(job => job.id === id);

      if (cachedJob) {
        setJob(cachedJob);
      } else {
        try {
          const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
          const { data: { data } } = await axios.get(`${baseUrl}/jobs/${id}?populate=*`);
          setJob(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchJobData();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  const {
    Position,
    Experience,
    Company,
    Overview,
    Responsibilities,
    Qualifications,
    Logo,
    LinkApplication,
    Posted,
    Location,
    jobtype,
    job_industry
  } = job.attributes;

  // Split Overview into sentences
  const overviewSentences = Overview?.split('.').map(sentence => sentence.trim()).filter(Boolean);
  const isOverviewLong = overviewSentences?.length > 3;
  const displayedOverview = isOverviewLong && !showFullOverview
    ? overviewSentences.slice(0, 3).join('. ') + '.'
    : Overview;

  // Split Qualifications and responsibilities into separate sentences
  const qualificationsList = Qualifications?.split('.').map(q => q.trim()).filter(Boolean);
  const responsibilitiesList = Responsibilities?.split('.').map(q => q.trim()).filter(Boolean);

  return (
    <div className='jd'>
      <div className="jobs">
        <h1>Job Details</h1>
      </div>
      <div className='extras'>
        <div className="job-header">
          {Logo && <img src={Logo} alt={`${Company} logo`} className="company-logo" />}
          <div>
            {Position && <h1>{Position}</h1>}
            {Company && <p className="company-name">{Company}</p>}
            {/* <div style={{display:'flex', flexDirection:'row'}}>
              {Location && <p className="location"><FiMapPin /> {Location}</p>}
              {jobtype?.data?.attributes?.Type && <p className="job-type"><FiBriefcase /> {jobtype.data.attributes.Type}</p>}
              {job_industry?.data?.attributes?.Industry && <p className="industry">{job_industry.data.attributes.Industry}</p>}
            </div> */}
          </div>
        </div>
        <div className='extra-extra'>
          <div className="job-detail-container">
            {/* <div className="job-header">
              {Logo && <img src={Logo} alt={`${Company} logo`} className="company-logo" />}
              <div>
                {Position && <h1>{Position}</h1>}
                {Company && <p className="company-name">{Company}</p>}
                {Location && <p className="location"><FiMapPin /> {Location}</p>}
                {jobtype?.data?.attributes?.Type && <p className="job-type"><FiBriefcase /> {jobtype.data.attributes.Type}</p>}
                {job_industry?.data?.attributes?.Industry && <p className="industry">{job_industry.data.attributes.Industry}</p>}
              </div>
            </div> */}

            <div className="job-body">
              {Overview && (
                <>
                  <h2>Job Description</h2>
                  <p>
                    {displayedOverview}
                    {isOverviewLong && (
                      <span
                        className="read-more"
                        onClick={() => setShowFullOverview(!showFullOverview)}
                      >
                        {showFullOverview ? ' Show less' : ' Read more'}
                      </span>
                    )}
                  </p>
                </>
              )}
              {Responsibilities && (
                <>
                  <h2>Responsibilities</h2>
                  <ul>
                    {responsibilitiesList.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </>
              )}
              {Qualifications && (
                <>
                  <h2>Qualifications / Professional Skills</h2>
                  <ul>
                    {qualificationsList.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </>
              )}
              {Experience && (
                <>
                  <h2>Experience</h2>
                  <p>{Experience} Years</p>
                </>
              )}
            </div>

            {/* <div className="job-footer">
              {Posted && <p>Posted on: {new Date(Posted).toLocaleDateString()}</p>}
              {LinkApplication && (
                <a href={LinkApplication} target="_blank" rel="noopener noreferrer" className="apply-button">
                  Apply Now <FiArrowRight />
                </a>
              )}
            </div> */}
          </div>
          <div>
            <div className="job-footer">
              {Posted && <p>Posted on: {new Date(Posted).toLocaleDateString()}</p>}
              {LinkApplication && (
                <a href={LinkApplication} target="_blank" rel="noopener noreferrer" className="apply-button">
                  Apply Now 
                </a>
              )}
              <div className='overview'>
                <h5>Job Overview</h5>
                <h6>Job Title</h6>
                {Position && <p>{Position}</p>}
                <h6>Job Type</h6>
                {jobtype?.data?.attributes?.Type && <p className="job-type"><FiBriefcase /> {jobtype.data.attributes.Type}</p>}
                <h6>Location</h6>
                {Location && <p className="location"><FiMapPin /> {Location}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobDetail.propTypes = {
  job: PropTypes.shape({
    attributes: PropTypes.shape({
      Position: PropTypes.string,
      Experience: PropTypes.string,
      Company: PropTypes.string,
      Overview: PropTypes.string,
      Responsibilities: PropTypes.string,
      Qualifications: PropTypes.string,
      Logo: PropTypes.string,
      LinkApplication: PropTypes.string,
      Posted: PropTypes.string,
      Location: PropTypes.string,
      jobtype: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Type: PropTypes.string
          })
        })
      }),
      job_industry: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            Industry: PropTypes.string
          })
        })
      })
    })
  })
};

export default JobDetail;
