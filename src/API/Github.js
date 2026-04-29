
const GITHUB_API_URL = 'https://api.github.com/users/depst0r/repos?per_page=100'

const getRepos = async () => {
    const res = await fetch(GITHUB_API_URL)
    
        if (!res.ok) {
            throw new Error(`Could not fetch${GITHUB_API_URL}, status: ${res.status}`)
        }

        return await res.json()
}

export default getRepos