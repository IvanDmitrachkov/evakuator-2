// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import BannerMane from '../../../components/BannerMane/BannerMane'
import Advantages from '../../../components/Advantages/Advantages'
import PriceBlock from '../../../components/Price/PriceBlock'
const PageHomeDesktop = () => (
  <div className={s.container}>
    <BannerMane />
    <Advantages />
    <PriceBlock />
  </div>
)

export default React.memo(PageHomeDesktop)
