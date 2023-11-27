import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import App from '@app/App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: App,
    children: routes
  }
])
