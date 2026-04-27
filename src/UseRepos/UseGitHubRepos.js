import { useState, useEffect } from 'react'
import FeaturedRepos from './config'
import getRepos from '../API/Github'

const UseGitHubRepos = () => {

    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getRepos().then(data => {
            const filtered = data.filter(repo => 
                FeaturedRepos.includes(repo.name)
            )
            setRepos(filtered)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [FeaturedRepos])

    return { repos, loading, error }

}

export default UseGitHubRepos