import { Params, useLoaderData } from 'react-router-dom'

import { ProfileApi } from '../api'
import { ProfileType } from '../types'
import { ProfileVariants } from '../styles'
import { OverviewComponent, RepositoriesComponent } from '../components'

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