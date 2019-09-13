// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import BannerMane from '../../../components/BannerMane/BannerMane'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <BannerMane />
  </div>
)

export default React.memo(PageHomeDesktop)
