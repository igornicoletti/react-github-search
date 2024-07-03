import { MapPinIcon, TerminalIcon, UserRoundCheckIcon, UserRoundPlusIcon } from 'lucide-react'

import { OverviewProps } from '../types'
import { OverviewVariants } from '../styles'

const { overviewavatar, overviewbio, overviewcontent, overviewhead, overviewicon, overviewli, overviewlogin, overviewname, overviewul } = OverviewVariants()

export const OverviewComponent = ({ avatar_url, bio, followers, following, location, login, name, public_repos }: OverviewProps) => {
  return (
    <div className={overviewcontent()}>
      <div className={overviewhead()}>
        <img className={overviewavatar()} src={avatar_url} alt={name} />
        <div>
          <h2 className={overviewname()}>{name}</h2>
          <p className={overviewlogin()}>@{login}</p>
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
        <li className={overviewli()}>
          <MapPinIcon className={overviewicon()} aria-hidden={true} />
          <span>{location}</span>
        </li>
      </ul>
    </div>
  )
}