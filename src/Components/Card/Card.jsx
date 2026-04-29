import './Card.scss';

export const Card = ({repo}) => {

    return (
    <div className="project__card">
        <div className="card__images">
            {/* <img src='https://camo.githubusercontent.com/660e8839e806a7a23f61b155be2e078a1cbd67f33c65b38994f8318cbd9e50f6/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7167515567674143335066763638377150432f67697068792e676966' alt={repo.full_name} /> */}
        <svg viewBox="0 0 16 16" fill="currentColor" width='150px'>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
            </div>
        <div className="card__lang">
            <span className="title-h6">{repo.language}</span>
        </div>
        <div className="card__info">
            <div className="card__title">{repo.name}</div>
            <div className="card__sub title-h6">{repo.license?.name ?? 'No license'}</div>
            <div className="card__buttons">
                <a href={repo.homepage} type='button' target='blank'>Live 🔗</a>
                <a href={repo.html_url} type='button' target='blank'>Github</a>
                </div>
        </div>
    </div>
    )
}
