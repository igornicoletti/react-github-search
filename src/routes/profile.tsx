import { Params, useLoaderData } from 'react-router-dom'

import { ProfileVariants } from '../styles'
import { ProfileType } from '../types'
import { OverviewComponent, RepositoriesComponent } from '../components'
import { ProfileApi } from '../api'

const { profilecontent, profilerepos } = ProfileVariants()

export const ProfileLoader = async ({ params }: { params: Params<string> }) => {
  const profile = await ProfileApi(params)
  return profile
}

export const ProfilePage = () => {
  const profile = useLoaderData() as ProfileType

  return (
    <div className={profilecontent()}>
      <OverviewComponent {...profile.overview} />
      <ul className={profilerepos()}>
        {profile.repositories.map((repository) => (
          <RepositoriesComponent key={repository.id} {...repository} />
        ))}
      </ul>
    </div>
  )
}