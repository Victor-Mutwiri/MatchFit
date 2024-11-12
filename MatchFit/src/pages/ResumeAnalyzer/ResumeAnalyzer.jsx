import { useState } from 'react';
import axios from 'axios';
import './ResumeAnalyzer.css'

const ResumeAnalyzer = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [resumes, setResumes] = useState([]);
    const [feedback, setFeedback] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setResumes(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setFeedback(null);

        const formData = new FormData();
        formData.append("job_description", jobDescription);
        resumes.forEach((resume) => formData.append("resumes", resume));

        try {
            const response = await axios.post('http://localhost:5000/analyze-resume', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setFeedback(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.error : "Error analyzing resumes");
        }
    };

    return (
        <div className='analyzer'>
            <h1>Resume Analyzer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Job Description:</label>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload Resumes (up to 3):</label>
                    <input
                        type="file"
                        multiple
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Analyze</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {feedback && (
                <div>
                    <h2>Feedback</h2>
                    {Object.entries(feedback).map(([filename, content]) => (
                        <div key={filename}>
                            <h3>{filename}</h3>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResumeAnalyzer;
