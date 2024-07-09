import { Link } from 'react-router-dom'
import { Building2Icon, ExternalLinkIcon, LinkIcon, MailIcon, MapPinIcon, TerminalIcon, UserRoundCheckIcon, UserRoundPlusIcon } from 'lucide-react'

import { OverviewType } from '../types'
import { OverviewVariants } from '../styles'

const { overviewavatar, overviewbio, overviewcontent, overviewhead, overviewicon, overviewli, overviewlogin, overviewname, overviewul } = OverviewVariants()

export const OverviewComponent = ({ avatar_url, bio, blog, company, email, followers, following, html_url, location, login, name, public_repos }: OverviewType) => {
  return (
    <div className={overviewcontent()}>
      <div className={overviewhead()}>
        <img className={overviewavatar()} src={avatar_url} alt={name} />
        <div>
          <h2 className={overviewname()}>{name}</h2>
          <Link className={overviewlogin()} to={html_url} target={'_blank'}>
            <span>{login}</span>
            <ExternalLinkIcon className={overviewicon()} aria-hidden={true} />
          </Link>
        </div>
      </div>
      <p className={overviewbio()}>{bio}</p>
      <ul className={overviewul()}>
        <li className={overviewli()}>
          <UserRoundCheckIcon className={overviewicon()} aria-hidden={true} />
          <span>{following} seguindo</span>
        </li>
        <li className={overviewli()}>
          <UserRoundPlusIcon className={overviewicon()} aria-hidden={true} />
          <span>{followers} seguidores</span>
        </li>
        <li className={overviewli()}>
          <TerminalIcon className={overviewicon()} aria-hidden={true} />
          <span>{public_repos} repositórios público</span>
        </li>
      </ul>
      <ul className={overviewul()}>
        {company && (
          <li className={overviewli()}>
            <Building2Icon className={overviewicon()} aria-hidden={true} />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li className={overviewli()}>
            <MapPinIcon className={overviewicon()} aria-hidden={true} />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li className={overviewli()}>
            <MailIcon className={overviewicon()} aria-hidden={true} />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li className={overviewli()}>
            <LinkIcon className={overviewicon()} aria-hidden={true} />
            <span>{blog}</span>
          </li>
        )}
      </ul>
    </div>
  )
}