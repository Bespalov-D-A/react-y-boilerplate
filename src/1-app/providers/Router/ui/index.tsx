import { Suspense, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../config/createRouter'
import { PreloaderPage } from '@shared/ui/_layers/PreloaderPage'
import { I18nextProvider } from 'react-i18next'
import i18n from '@app/config/i18n'

const Routing: FC = () => {
  return (
    <Suspense fallback={<PreloaderPage />}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Suspense>
  )
}

export default Routing
