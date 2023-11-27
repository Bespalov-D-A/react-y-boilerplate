import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { GoogleAuthBtn } from '@shared/ui/_buttons/GoogleAuthBtn'

const RootPage: FC = (props) => {
  return (
    <div>
      <div>sdsdfsdf</div>
      <Outlet />
    </div>
  )
}

export default RootPage
