import {useState} from 'react'
import './UserProfile.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const UserProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        about: '',
        field: '',
        experience: '',
        email: '',
        availability: '',
        profileImage: null,
      });

      const [submittedData, setSubmittedData] = useState(null);

      const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
          const url = `${baseUrl}/user-profiles`; // Replace with your actual endpoint

          const requiredFields = ['name', 'about', 'field', 'experience', 'email', 'availability'];
            for (const field of requiredFields) {
                if (!formData[field]) {
                toast.error(`Please fill in the ${field} field`, { hideProgressBar: true });
                return; // Prevent form submission if any required field is empty
                }
            }
          const res = await axios.post(url, formData);
          if (res.status === 200) {
            toast.success('Profile submitted successfully!', { hideProgressBar: true });
            setSubmittedData(formData);
          }
        } catch (error) {
          toast.error(error.message, { hideProgressBar: true });
        }
      };

      const handleUpdate = () => {
        setSubmittedData(formData);
      };

  return (
    <div className='userprofile-top'>
        <button><Link to='/ViewProfile'>View Profile</Link></button>
        <form onSubmit={handleSubmit} className='profile'>
            <div className='image'>
                <label htmlFor="profileImage">Profile Image:</label>
                <input type="file" id="profileImage" name="profileImage" value={formData.photo} onChange={handleChange} />
            </div>
            <div className='name'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className='about'>
                <label htmlFor="about">About:</label>
                <textarea id="about" name="about" value={formData.about} onChange={handleChange} required />
            </div>
            <div className='field'>
                <label htmlFor="field">Field:</label>
                <input type="text" id="field" name="field" value={formData.field} onChange={handleChange} required />
            </div>
            <div className='experience'>
                <label htmlFor="experience">Experience (years):</label>
                <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div className='email'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='availability'>
                <label htmlFor="availability">Availability:</label>
                <select id="availability" name="availability" value={formData.availability} onChange={handleChange} required>
                    <option value="">Select Availability</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        {submittedData && (
            <div>
            <h2>Submitted Data</h2>
            {submittedData.profileImage && (
                <div className='image'>
                    <img src={submittedData.profileImage} alt="Profile" />
                </div>
            )}
            <p>Name: {submittedData.name}</p>
            <p>About: {submittedData.nbout}</p>
            <p>Field: {submittedData.field}</p>
            <p>Experience: {submittedData.experience}</p>
            <p>Email: {submittedData.email}</p>
            <p>Availability: {submittedData.availability}</p>
            <button onClick={handleUpdate}>Update</button>
            </div>
        )}
    </div>
  )
}
