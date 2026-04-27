import Card from '../Card/Card.jsx'
import UseGitHubRepos from '../../UseRepos/UseGitHubRepos.js'

import './Project.scss'


const Project = () => {
    const { repos, loading, error } = UseGitHubRepos()
    // console.log('Project=>', repos)

    return (
        <div className="project">
            <div className="project__wrapper">
                <div className="project__header">
                <div className="project__title">
                    <span className="hash-symbol">#</span>
                    <span className="title-h4">projects</span>
                    <div className="project__title-line"></div>
                    </div>
                    <div className="project__link">
                        <a href="#" className='link'>View all {`~~>`}</a>
                        </div>
                </div>
                <div className="project__cards">
                {repos.map(repo => <Card repo={repo} key={repo.id} /> )}
                </div>
            </div>
        </div>
    )
}

export default Project