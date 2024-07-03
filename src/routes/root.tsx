import { Outlet } from 'react-router-dom'

import { RootVariants } from '../styles'
import { SearchComponent } from '../components'

const { rootcontainer, rootlayout, } = RootVariants()

export const RootPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <SearchComponent />
        <Outlet />
      </div>
    </div>
  )
}