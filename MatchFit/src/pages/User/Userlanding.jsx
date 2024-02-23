import { useJobTypes } from "./UseJobTypes";
import { userData } from "../../authUtils";
import './Userlanding.css'


export const Userlanding = () => {
  const {userName} = userData();

  const {jobType, jobs} = useJobTypes()
  console.log({jobType})
  console.log({jobs})
  return (
    <div className="Userlanding">
      <h2>Welcome {userName}</h2>
      <h3>Check out our jobs</h3>

      {jobType.length && jobType.map(type=>{
        const hasJobs = jobs.filter(job=>job.attributes.id === type.attributes.id)
        return hasJobs && hasJobs.length?(
          <div key={jobs.id}>
            <h2>{type.attributes.name}</h2>
            {hasJobs.map(job=>(
              <div key={job.createdAt}>
                <h2>{job.attributes.Company}</h2>
                <span>{job.attributes.Overview}</span>
                <h2>{job.attributes.Position}</h2>
                <p>{job.attributes.About}</p>
              </div>
            ))}
          </div>
        ):null
        })
      }
    </div>
  )
}
