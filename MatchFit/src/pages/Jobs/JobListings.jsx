import { useJobTypes } from "./UseJobTypes";
import './JobListings.css';
import Categories from "../../components/Categories/Categories";
import SkeletonJob from "./SkeletonJob";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiMapPin } from 'react-icons/fi';

const formatDateDifference = (postedDate) => {
  const currentDate = new Date();
  const jobDate = new Date(postedDate);
  const diffTime = Math.abs(currentDate - jobDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

const JOBS_PER_PAGE = 10;

export const JobListings = () => {
  const { jobs: initialJobs, isLoading: jobsLoading } = useJobTypes();
  const [jobs, setJobs] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const cachedJobs = JSON.parse(localStorage.getItem('cachedJobs'));
  
    const sortByPostedDate = (jobList) => {
      return jobList.sort((a, b) => new Date(b.attributes.Posted) - new Date(a.attributes.Posted));
    };
  
    // Check if cached jobs exist and if they are up-to-date with initialJobs
    if (initialJobs && initialJobs.length > 0) {
      const sortedJobs = sortByPostedDate(initialJobs);
  
      // Compare cached jobs with new jobs
      if (
        !cachedJobs ||
        cachedJobs.length !== sortedJobs.length ||
        cachedJobs[0]?.id !== sortedJobs[0]?.id // Assumes that jobs array is sorted
      ) {
        // Update cache with the latest jobs if there's a difference
        setJobs(sortedJobs);
        localStorage.setItem('cachedJobs', JSON.stringify(sortedJobs));
      } else {
        setJobs(sortByPostedDate(cachedJobs));
      }
    } else if (cachedJobs && cachedJobs.length > 0) {
      setJobs(sortByPostedDate(cachedJobs));
    } else if (!jobsLoading) {
      setJobs([]); // Fallback state to indicate jobs are being loaded
    }
  }, [initialJobs, jobsLoading]);
  
  

  const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);

  const filteredJobs = selectedCategory
    ? jobs?.filter(job => job.attributes.job_industry?.data?.id === selectedCategory)
    : jobs;

  
    const displayedJobs = filteredJobs?.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

    const totalPages = Math.ceil((filteredJobs?.length || 0) / JOBS_PER_PAGE);
  
    const nextPage = () => {
      if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };
  
    const previousPage = () => {
      if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

  return (
    <div>
      <div className="jobs">
        <h1>Jobs</h1>
      </div>
      <div className="Userlanding">
        <Categories onSelectCategory={handleSelectCategory} />
        <div>
          <h4>Showing results</h4>
          <div className="job-list-container">
            {jobsLoading ? (
              Array.from({ length: 5 }).map((_, idx) => <SkeletonJob key={idx} />)
            ) : jobs?.length ? (
              filteredJobs.map((job) => (
                <Link to={`/job/${job.id}`} className="job-link" key={job.id}>
                  <div className="job-list">
                    <div className="details">
                      <img src={job.attributes.Logo} alt="logo" className="company-logo" />
                      <div className="description">
                        <h4>{job.attributes.Position}</h4>
                        <h5>{job.attributes.Company}</h5>
                      </div>
                      {/* <h5><FiMapPin />{job.attributes.Location}</h5> */}
                    </div>
                    <h5>{formatDateDifference(job.attributes.Posted)}</h5>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading jobs... Please wait a moment.</p>
            )}
          </div>
          <div className="pagination">
            <button onClick={previousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
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
