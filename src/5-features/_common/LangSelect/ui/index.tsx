import React, { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { Translate } from '@mui/icons-material'
import { config } from '@shared/config/commonConfig'

interface IProps {}

const LangSelect: FC<IProps> = () => {
  const { t, i18n } = useTranslation('common')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const langs: readonly string[] = config.supportedLngs
  const setLang = (lang: string): void => {
    console.log(lang)
    void i18n.changeLanguage(lang)
    handleClose()
  }

  return (
    <div>
      <IconButton
        color='primary'
        onClick={handleClick}
        size='small'
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <Translate />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {langs
          ?.map((e) => ({ original: e, new: e === 'en' ? 'us' : e }))
          .map((l) => (
            <MenuItem
              onClick={() => {
                setLang(l.original)
              }}
              key={l.original}
            >
              <span
                style={{ marginRight: 6 }}
                className={`fi fi-${l.new} fis`}
              />
              {t(`all-lang.${l.original}`)}
            </MenuItem>
          ))}
      </Menu>
      ;
    </div>
  )
}

export default LangSelect
