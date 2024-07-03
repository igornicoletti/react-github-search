import { ProfileVariants } from '../styles'
import { OverviewComponent, RepositoriesComponent } from '../components'

const { profilecontent, profilerepos } = ProfileVariants()

const overview = {
  avatar_url: 'https://avatars.githubusercontent.com/u/40406316?v=4',
  name: 'Igor Nicoletti',
  login: 'igornicoletti',
  bio: 'Front-End Developer - React | Node.js',
  followers: 6,
  following: 6,
  public_repos: 6,
  location: 'São José do Rio Preto, São Paulo, Brasil',
}

const repositories = [
  {
    id: 815717789,
    html_url: 'https://github.com/igornicoletti/api-coffee-delivery',
    name: 'api-coffee-delivery',
    description: 'Fake REST API deployed with JSON Server on Vercel, used in the Coffee Delivery project.',
    stargazers_count: 0,
    homepage: 'https://react-github-search-omega.vercel.app',
  },
  {
    id: 794700559,
    html_url: 'https://github.com/igornicoletti/api-coffee-delivery',
    name: 'api-coffee-delivery',
    description: 'Fake REST API deployed with JSON Server on Vercel, used in the Coffee Delivery project.',
    stargazers_count: 0,
    homepage: 'https://react-github-search-omega.vercel.app',
  }
]

export const ProfilePage = () => {
  return (
    <div className={profilecontent()}>
      <OverviewComponent {...overview} />
      <ul className={profilerepos()}>
        {repositories.map((repository) => (
          <RepositoriesComponent key={repository.id} {...repository} />
        ))}
      </ul>
    </div>
  )
}