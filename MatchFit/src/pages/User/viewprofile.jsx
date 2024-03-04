
import PropTypes from 'prop-types';
import './viewprofile.css';

const ViewProfile = ({ formData }) => {
  return (
    <div className='view-profile'>
      <h2>User Profile</h2>
      <div className='profile-info'>
      {formData.profileImage && (
                    <div className='profile-image'>
                        <img src={formData.profileImage} alt="Profile" />
                    </div>
                )}
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>About:</strong> {formData.about}</p>
        <p><strong>Field:</strong> {formData.field}</p>
        <p><strong>Experience:</strong> {formData.experience} years</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Availability:</strong> {formData.availability}</p>
      </div>
    </div>
  );
};

export default ViewProfile;


ViewProfile.propTypes = {
  formData: PropTypes.object.isRequired, // Make formData a required object prop
};
