import { useState, useEffect } from 'react'
import getRepos from '../../API/Github'

const UseGitHubRepos = () => {

    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getRepos().then(data => {
            setRepos(data)
        })
    }, [])

console.log('Project',repos)

}

export default UsegitHubRepos