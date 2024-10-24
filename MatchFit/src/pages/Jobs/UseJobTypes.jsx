import axios from "axios"
import { useEffect, useState } from "react"

export const useJobTypes = () => {
    const [jobs, setJobs] = useState([])
    const [jobType, setJobType] = useState([])

    const fetchJobType = async () => {
        try {
            const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
            const {data:{data}} = await axios.get(`${baseUrl}/jobtypes`)
            /* const {data:{data}} = await axios.get('http://localhost:1337/api/jobtypes') */
            setJobType(data)
            /* setJobType(response.data) */
        } catch (error) {
            console.log(error)
        }
    }

    const fetchJobs = async () => {
        try {
            const baseUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL;
            const {data:{data}} = await axios.get(`${baseUrl}/jobs?populate=*`)
            /* const {data:{data}} = await axios.get('http://localhost:1337/api/jobs?populate=*') */
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
