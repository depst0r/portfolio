import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

import getRepos from '../../API/Github'

import Spiner from '../Spiner/Spiner.jsx'
import {ErrorMessage} from '../ErrorMessage/ErrorMessage.jsx'

import './RepoPage.scss';

export const RepoPage = () => {

    const { repoId } = useParams()
    const [repo, setRepo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRepos();
                const foundRepo = data.find(repo => repo.id ==  repoId);
                console.log(data)
                console.log(foundRepo)

                setRepo(foundRepo)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

        if (loading) return <Spiner/>
        if (error) return <ErrorMessage/>


    return (
        
        <section className="repo-page">
            <div className="repo-page__container">
                <Link to="/works" className="repo-page__back">
                    ← Back to works
                </Link>

                <div className="repo-page__card">
                    <div className="repo-page__head">
                        <h1 className="repo-page__name">{repo.name}</h1>
                        <span className="repo-page__badge">
                            {repo.private ? '🔒 Private' : '🌍 Public'}
                        </span>
                    </div>

                    <p className="repo-page__description">
                        {repo.description || 'No description'}
                    </p>

                    <div className="repo-page__stats">
                        <span className="repo-page__stat">
                            ⭐ {repo.stargazers_count}
                        </span>
                        <span className="repo-page__stat">
                            🍴 {repo.forks_count}
                        </span>
                        <span className="repo-page__stat">
                            🐛 {repo.open_issues_count}
                        </span>
                    </div>

                    <div className="repo-page__meta">
                        <div className="repo-page__language">
                            <span className="repo-page__dot" />
                            {repo.language || 'Unknown'}
                        </div>
                        <span className="repo-page__date">
                            📅 {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                        {repo.license && (
                            <span className="repo-page__license">
                                📄 {repo.license.name}
                            </span>
                        )}
                    </div>

                    <div className="repo-page__actions">
                        <a href={repo.html_url} className="repo-page__btn" target="_blank" rel="noopener noreferrer">
                            GitHub →
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} className="repo-page__btn repo-page__btn--live" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};