import { Link } from 'react-router-dom'
import { LinkIcon, StarIcon, TerminalIcon } from 'lucide-react'

import { RepositoriesType } from '../types'
import { RepositoriesVariants } from '../styles'

const { reposcard, reposdescription, reposdivision, reposicon, reposiconsmall, reposinfo, reposlink, reposname } = RepositoriesVariants()

export const RepositoriesComponent = ({ description, homepage, html_url, name, stargazers_count }: RepositoriesType) => {
  return (
    <li className={reposcard()}>
      <Link className={reposlink()} to={html_url} target={'_blank'}>
        <TerminalIcon className={reposicon()} aria-hidden={true} />
        <h2 className={reposname()}>{name}</h2>
      </Link>
      {description && (<p className={reposdescription()}>{description}</p>)}
      {stargazers_count > 0 || homepage && (
        <div className={reposinfo()}>
          {stargazers_count > 0 && (
            <div className={reposlink()}>
              <StarIcon className={reposiconsmall()} aria-hidden={true} />
              <span>{stargazers_count}</span>
            </div>
          )}
          {stargazers_count > 0 && homepage && (<span className={reposdivision()}>•</span>)}
          {homepage && (
            <Link className={reposlink()} to={homepage} target={'_blank'}>
              <LinkIcon className={reposiconsmall()} aria-hidden={true} />
              <span>{homepage} </span>
            </Link>
          )}
        </div>
      )}
    </li>
  )
}