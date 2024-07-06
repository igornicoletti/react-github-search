import { OverviewType } from './overview'
import { RepositoriesType } from './repositories'

export type ProfileProps = {
  profile: string
}

export interface ProfileType {
  overview: OverviewType
  repositories: RepositoriesType[]
}