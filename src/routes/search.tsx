import { Form } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'

import { SearchVariants } from '../styles'

const { searchcontainer, searchform, searchicon, searchinput, searchlayout, searchtitle } = SearchVariants()

export const SearchPage = () => {
  return (
    <div className={searchlayout()}>
      <div className={searchcontainer()}>
        <h1 className={searchtitle()}>GitHub Search</h1>
        <Form className={searchform()}>
          <input className={searchinput()} type={'text'} placeholder={'Search profile or type a username'} />
          <SearchIcon className={searchicon()} />
        </Form>
      </div>
    </div>
  )
}