import { useJobTypes } from "./UseJobTypes";
import './JobListings.css';
import Categories from "../../components/Categories/Categories";
import SkeletonJob from "./SkeletonJob";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const formatDateDifference = (postedDate) => {
  const currentDate = new Date();
  const jobDate = new Date(postedDate);
  const diffTime = Math.abs(currentDate - jobDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week(s) ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month(s) ago`;
  return `${Math.floor(diffDays / 365)} year(s) ago`;
};

export const JobListings = () => {
  const { jobs: initialJobs, isLoading: jobsLoading } = useJobTypes();
  const [jobs, setJobs] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const cachedJobs = JSON.parse(localStorage.getItem('cachedJobs'));
  
    const sortByPostedDate = (jobList) => {
      return jobList.sort((a, b) => new Date(b.attributes.Posted) - new Date(a.attributes.Posted));
    };
  
    if (cachedJobs && cachedJobs.length > 0) {
      setJobs(sortByPostedDate(cachedJobs));
    } else if (initialJobs && initialJobs.length > 0) {
      const sortedJobs = sortByPostedDate(initialJobs);
      setJobs(sortedJobs);
      localStorage.setItem('cachedJobs', JSON.stringify(sortedJobs));
    } else if (!jobsLoading) {
      setJobs([]); // Fallback state to indicate jobs are being loaded
    }
  }, [initialJobs, jobsLoading]);
  

  const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);

  const filteredJobs = selectedCategory
    ? jobs?.filter(job => job.attributes.job_industry?.data?.id === selectedCategory)
    : jobs;

  return (
    <div className="Userlanding">
      <Categories onSelectCategory={handleSelectCategory} />
      <div>
        <h3>Latest Jobs</h3>
        <div className="job-list-container">
          {jobsLoading ? (
            Array.from({ length: 5 }).map((_, idx) => <SkeletonJob key={idx} />)
          ) : jobs?.length ? (
            filteredJobs.map((job) => (
              <Link to={`/job/${job.id}`} className="job-link" key={job.id}>
                <div className="job-list">
                  <img src={job.attributes.Logo} alt="logo" className="company-logo" />
                  <div className="description">
                    <h4>{job.attributes.Company}</h4>
                    <h5>{job.attributes.Position}</h5>
                    <h5>{formatDateDifference(job.attributes.Posted)}</h5>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading jobs... Please wait a moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

JobListings.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      Company: PropTypes.string,
      Position: PropTypes.string,
      Posted: PropTypes.string,
      Logo: PropTypes.string,
      job_industry: PropTypes.shape({
        data: PropTypes.shape({
          id: PropTypes.number
        })
      })
    }).isRequired
  }))
};
