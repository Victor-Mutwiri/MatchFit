import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './JobDescription.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FiMapPin, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
        const { data: { data } } = await axios.get(`${baseUrl}/jobs/${id}?populate=*`);
        setJob(data);
      } catch (error) {
        console.log(error);
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

  return (
    <div className="job-detail-container">
      <div className="job-header">
        {Logo && <img src={Logo} alt={`${Company} logo`} className="company-logo" />}
        <div>
          {Position && <h1>{Position}</h1>}
          {Company && <p className="company-name">{Company}</p>}
          {Location && <p className="location"><FiMapPin /> {Location}</p>}
          {jobtype?.data?.attributes?.Type && <p className="job-type"><FiBriefcase /> {jobtype.data.attributes.Type}</p>}
          {job_industry?.data?.attributes?.Industry && <p className="industry">{job_industry.data.attributes.Industry}</p>}
        </div>
      </div>

      <div className="job-body">
        {Overview && (
          <>
            <h2>Overview</h2>
            <p>{Overview}</p>
          </>
        )}
        {Responsibilities && (
          <>
            <h2>Responsibilities</h2>
            <p>{Responsibilities}</p>
          </>
        )}
        {Qualifications && (
          <>
            <h2>Qualifications</h2>
            <p>{Qualifications}</p>
          </>
        )}
        {Experience && (
          <>
            <h2>Experience</h2>
            <p>{Experience} Years</p>
          </>
        )}
      </div>

      <div className="job-footer">
        {Posted && <p>Posted on: {new Date(Posted).toLocaleDateString()}</p>}
        {LinkApplication && (
          <a href={LinkApplication} target="_blank" rel="noopener noreferrer" className="apply-button">
            Apply Now <FiArrowRight />
          </a>
        )}
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
