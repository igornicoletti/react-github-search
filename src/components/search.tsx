import { Form } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'

import { SearchVariants } from '../styles'

const { searchcontent, searchform, searchicon, searchinput, searchtitle } = SearchVariants()

export const SearchComponent = () => {
  return (
    <div className={searchcontent()}>
      <h1 className={searchtitle()}>GitHub Search</h1>
      <Form className={searchform()}>
        <input className={searchinput()} id={'q'} name={'q'} type={'search'} placeholder={'Search...'} />
        <SearchIcon className={searchicon()} />
      </Form>
    </div>
  )
}