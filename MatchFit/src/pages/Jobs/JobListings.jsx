import { useJobTypes } from "./UseJobTypes";
import './JobListings.css';
import Categories from "../../components/Categories/Categories";
import SkeletonJob from "./SkeletonJob";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Helper function to calculate the time difference and format it
const formatDateDifference = (postedDate) => {
  const currentDate = new Date();
  const jobDate = new Date(postedDate);
  const diffTime = Math.abs(currentDate - jobDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
};

export const JobListings = () => {
  const { jobs: initialJobs } = useJobTypes();
  const [jobs, setJobs] = useState(null); // Start with `null` to indicate loading state
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const cachedJobs = JSON.parse(localStorage.getItem('cachedJobs'));
    if (!cachedJobs) {
      setJobs(initialJobs || []);
      localStorage.setItem('cachedJobs', JSON.stringify(initialJobs));
    } else {
      setJobs(cachedJobs);
    }
  }, [initialJobs]);

  const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);
  const handleClearFilter = () => setSelectedCategory(null);

  const filteredJobs = selectedCategory
    ? jobs?.filter(job => job.attributes.job_industry?.data?.id === selectedCategory)
    : jobs;

  return (
    <div className="Userlanding">
      <Categories onSelectCategory={handleSelectCategory} />
      {selectedCategory && (
        <button onClick={handleClearFilter} className="clear-filter-button">Clear Filter</button>
      )}
      <div>
        <h3>Latest Jobs</h3>
        <div className="job-list-container">
          {!jobs ? (
            Array.from({ length: 5 }).map((_, idx) => <SkeletonJob key={idx} />) // Render 5 skeletons while loading
          ) : (
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