import { OverviewType } from './overview'
import { RepositoriesType } from './repositories'

export interface ProfileType {
  overview: OverviewType
  repositories: RepositoriesType[]
}