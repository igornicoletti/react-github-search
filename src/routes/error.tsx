import { useParams } from 'react-router-dom'

import { ErrorVariants } from '../styles'

const { errorcontainer, errorcontent, errorlayout, errortitle, errorstatus } = ErrorVariants()

export function ErrorPage() {
  const { profile } = useParams()

  return (
    <div className={errorlayout()}>
      <div className={errorcontainer()}>
        <div className={errorcontent()}>
          <p className={errortitle()}>Oops, we couldn't find a profile that matches {profile}!</p>
          <h1 className={errorstatus()}>Search by username or try again.</h1>
        </div>
      </div>
    </div>
  )
}