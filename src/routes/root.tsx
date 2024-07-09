import { SearchIcon } from 'lucide-react'
import { Form, Link, Outlet, redirect } from 'react-router-dom'

import { RootVariants, SearchVariants } from '../styles'

const { rootcontainer, rootlayout, } = RootVariants()
const { searchcontent, searchform, searchicon, searchinput, searchsubmit, searchtitle } = SearchVariants()

export const RootAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const profile = formData.get('profile')
  return redirect(`${profile}`)
}

export const RootPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <div className={searchcontent()}>
          <Link to={'/'}><h1 className={searchtitle()}>GitHub Search</h1></Link>
          <Form className={searchform()} method={'post'}>
            <input
              type={'text'}
              id={'profile'}
              name={'profile'}
              autoComplete={'off'}
              placeholder={'Search...'}
              className={searchinput()} />
            <button className={searchsubmit()} type={'submit'}>
              <SearchIcon className={searchicon()} />
            </button>
          </Form>
        </div>
        <Outlet />
      </div>
    </div>
  )
}