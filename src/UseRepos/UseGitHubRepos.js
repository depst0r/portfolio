import { useState, useEffect } from 'react'
import getRepos from '../API/Github'

const UseGitHubRepos = () => {

    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getRepos().then(data => {
            setRepos(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    }, [])

    return { repos, loading, error }

}

export default UseGitHubRepos