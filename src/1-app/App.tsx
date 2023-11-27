import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import { allProviders } from '@app/providers/Compose'

// Входная точка приложения
const App: FC = () => {
  return <Outlet />
}

// оборачиваем входной компонент App провайдерами
export default allProviders(<App />)
