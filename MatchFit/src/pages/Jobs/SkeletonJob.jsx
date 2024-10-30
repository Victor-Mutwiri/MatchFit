// SkeletonJob.js
import "./SkeletonJob.css";

const SkeletonJob = () => (
  <div className="skeleton-job-list">
    <div className="skeleton-logo"></div>
    <div className="skeleton-description">
      <div className="skeleton-title"></div>
      <div className="skeleton-subtitle"></div>
      <div className="skeleton-date"></div>
    </div>
  </div>
);

export default SkeletonJob;
