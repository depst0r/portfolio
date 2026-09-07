import { Link } from 'react-router-dom';
import './RepoPage.scss';

export const RepoPage = () => {


    const repo = {
        name: 'название-репозитория',
        description: 'Краткое описание проекта. Что делает, какие задачи решает.',
        private: false,
        stargazers_count: 42,
        forks_count: 12,
        open_issues_count: 3,
        language: 'JavaScript',
        updated_at: '2025-08-31T10:00:00Z',
        license: { name: 'MIT License' },
        html_url: '#',
        homepage: '#'
    };

    return (
        <section className="repo-page">
            <div className="repo-page__container">
                <Link to="/works" className="repo-page__back">
                    ← Назад к портфолио
                </Link>

                <div className="repo-page__card">
                    <div className="repo-page__head">
                        <h1 className="repo-page__name">{repo.name}</h1>
                        <span className="repo-page__badge">
                            {repo.private ? '🔒 Приватный' : '🌍 Публичный'}
                        </span>
                    </div>

                    <p className="repo-page__description">
                        {repo.description || 'Описание отсутствует'}
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
                            {repo.language || 'Не указан'}
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