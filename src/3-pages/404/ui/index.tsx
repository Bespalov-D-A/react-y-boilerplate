import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import s from './index.module.scss'

const Page404: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={s['not-found']}>
      <h2>{t('404')}</h2>
    </div>
  )
}

export default Page404
