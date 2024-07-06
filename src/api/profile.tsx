import axios from 'axios'
import { Params } from 'react-router-dom'

import { OverviewType, RepositoriesType } from '../types'

export const ProfileApi = async ({ profile }: Params<string>) => {
  const overview = await axios.get<OverviewType>(`https://api.github.com/users/${profile}`).then((response) => response.data)
  const repositories = await axios.get<RepositoriesType[]>(`https://api.github.com/users/${profile}/repos`).then((response) => response.data)
  return { overview, repositories }
}