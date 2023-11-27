import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSelect } from '@features/_common/LangSelect'
import { GoogleAuthBtn } from '@shared/ui/_buttons/GoogleAuthBtn'

interface IProps {}

const AuthPage: React.FC<IProps> = () => {
  const { t, i18n } = useTranslation('en-US')

  return (
    <div>
      <GoogleAuthBtn />
      <LangSelect />
      {t('withGoogleAuth')}
    </div>
  )
}

export default AuthPage
