/* import { userData } from "../../helpers"; */
import { userData } from "../../authUtils";
import { useNavigate } from "react-router-dom";
import './employerlanding.css'


export const Employerlanding = () => {
  const {userName} = userData();
  const navigate = useNavigate();

  return (
    <div className="employerhome">
      <h2>Welcome {userName}</h2>
      <button onClick={() => navigate("/")}>Log out</button>

      {/* {
        jobType.length && jobType.map(type=>{
          const hasJobs = jobs.filter(job=>job.attributes === type.attributes)
          return hasJobs && hasJobs.length?(
            <>
              <h2>{type.attributes.name}</h2>
              {hasJobs.map(job=>(
                <div key={job.id}>
                  <h3>{job.attributes.title}</h3>
                  <p>{job.attributes.description}</p>
                </div>
              ))}
            </>
          ):null
          })
      } */}
    </div>
  )


}
