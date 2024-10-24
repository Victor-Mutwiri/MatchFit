import { useJobTypes } from "./UseJobTypes";
import './JobListings.css';
import Categories from "../../components/Categories/Categories";
import { useState } from "react";

// Helper function to calculate the time difference and format it
const formatDateDifference = (postedDate) => {
  const currentDate = new Date();
  const jobDate = new Date(postedDate);
  const diffTime = Math.abs(currentDate - jobDate); // Time difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days

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

export const Userlanding = () => {
  const { jobType, jobs } = useJobTypes();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);
  };

  const filteredJobs = selectedCategory
    ? jobs.filter(job => job.attributes.job_industry?.data?.id === selectedCategory)
    : jobs;

  return (
    <div className="Userlanding">
      <div>
        <Categories onSelectCategory={handleSelectCategory} />
        {selectedCategory && (
          <button onClick={handleClearFilter} className="clear-filter-button">
            Clear Filter
          </button>
        )}
      </div>
      <div>
        <h3>Latest Jobs</h3>
        {filteredJobs.map((job) => (
          <div className="job-list" key={job.id}>
            <img src={job.attributes.Logo} alt="logo" className="company-logo"/>
            <div className="description">
              <h4>{job.attributes.Company}</h4>
              <h5>{job.attributes.Position}</h5>
              <h5>{formatDateDifference(job.attributes.Posted)}</h5> {/* Use the helper function here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
