import { useJobTypes } from "./UseJobTypes";
import './Userlanding.css'


export const Userlanding = () => {

  const {jobType, jobs} = useJobTypes()
  console.log({jobType})
  console.log({jobs})
  return (
    <div className="Userlanding">
      <h3>Check out our jobs</h3>
      {jobType.length && jobType.map(type=>{
        const hasJobs = jobs.filter(job=>job.attributes.jobtype.data.id === type.id)
        return hasJobs && hasJobs.length?(
          <>
            <h2>{type.attributes.Type}</h2>
            <div key={type.id}>
              {hasJobs.map(job=>
                <div key={job.id}>
                  <h4>{job.attributes.Company}</h4>
                  <h5>{job.attributes.Position}</h5>
                  <span> <strong><i>{job.attributes.Experience} years</i></strong></span>
                  <p>{job.attributes.Overview}</p>
                </div>
              )}
              </div>
          </>
        ):null
        })
      }
    </div>
  )
}
