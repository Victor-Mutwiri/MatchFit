import axios from "axios"
import { useEffect, useState } from "react"

export const useJobTypes = () => {
    const [jobs, setJobs] = useState([])
    const [jobType, setJobType] = useState([])

    const fetchJobType = async () => {
        try {
            const {data:{data}} = await axios.get('http://localhost:1337/api/jobtypes')
            setJobType(data)
            /* setJobType(response.data) */
        } catch (error) {
            console.log(error)
        }
    }

    const fetchJobs = async () => {
        try {
            const {data:{data}} = await axios.get('http://localhost:1337/api/jobs?populate=*')
            setJobs(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchJobs()
        fetchJobType()
    }, [])
  return {
    jobType, jobs
}
}
