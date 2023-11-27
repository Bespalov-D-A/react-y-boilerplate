import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './index.module.scss'

interface IBoundaryErrorPage {}

const BoundaryErrorPage: React.FC<IBoundaryErrorPage> = () => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={s.unknown_error}>
      {t('unknown_error')}
      <button onClick={reloadPage}>RELOAD</button>
    </div>
  )
}

export default BoundaryErrorPage
