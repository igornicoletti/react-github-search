import { Link } from 'react-router-dom'
import { ExternalLinkIcon, LinkIcon, StarIcon } from 'lucide-react'

import { RepositoriesProps } from '../types'
import { RepositoriesVariants } from '../styles'

const { reposcontent, reposdescription, reposdivision, reposicon, reposiconsmall, reposinfo, reposli, reposlink, reposname } = RepositoriesVariants()

export const RepositoriesComponent = ({ description, homepage, html_url, name, stargazers_count }: RepositoriesProps) => {
  return (
    <li className={reposli()}>
      <Link className={reposlink()} to={html_url} target={'_blank'}>
        <h2 className={reposname()}>{name}</h2>
        <ExternalLinkIcon className={reposicon()} aria-hidden={true} />
      </Link>
      <p className={reposdescription()}>{description}</p>
      <div className={reposcontent()}>
        <div className={reposinfo()}>
          <StarIcon className={reposiconsmall()} aria-hidden={true} />
          <span>{stargazers_count}</span>
        </div>
        <span className={reposdivision()}>•</span>
        <Link className={reposinfo()} to={homepage} target={'_blank'}>
          <LinkIcon className={reposiconsmall()} aria-hidden={true} />
          <span>{homepage} </span>
        </Link>
      </div>
    </li>
  )
}