import { useJobTypes } from "./UseJobTypes";
import './JobListings.css';
import Categories from "../../components/Categories/Categories";
import { useState } from "react";

export const Userlanding = () => {
  const { jobType, jobs } = useJobTypes();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);  // Now you're selecting by industry/category
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);  // Reset the filter to show all jobs
  };

  const filteredJobs = selectedCategory
    ? jobs.filter(job => job.attributes.job_industry?.data?.id === selectedCategory)  // Corrected to job_industry
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
            <h5>{job.attributes.Posted}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
