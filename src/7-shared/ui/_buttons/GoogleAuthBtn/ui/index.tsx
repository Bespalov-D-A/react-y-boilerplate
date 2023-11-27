import React from 'react'
import google from './img/google.svg?url'
import s from './index.module.scss'
import { config } from '@shared/config/commonConfig'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'

interface IGoogleAuthBtn {}

const credentialLink = `${config.url.client}/api/auth/google`

const GoogleAuthBtn: React.FC<IGoogleAuthBtn> = (props) => {
  const { t } = useTranslation('page-auth')
  return (
    <Button
      style={{ margin: 12, padding: '12px 12px 12px 52px' }}
      className={s.btn}
      onClick={() => {
        credentialLink && window.location.assign(credentialLink)
      }}
    >
      <img src={google} alt='' className={s.ico} />
      <span>{t('google-btn')}</span>
    </Button>
  )
}

export default GoogleAuthBtn
