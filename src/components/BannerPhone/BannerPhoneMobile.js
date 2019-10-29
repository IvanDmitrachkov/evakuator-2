import React from 'react'
import css from './BannerPhoneMobile.module.scss'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'
import Layout from '../Layout/LayoutMobile'
import Padding from '../Padding/Padding'

const BannerPhoneMobile = () => (
  <div className={css.container}>
    <Layout>
      <h2>Для вызова эвакуатора звоните</h2>
      <Padding value={40} />
      <div>{MOBILE_PHONE_STANDART_LINK}</div>
    </Layout>
  </div>
)

export default React.memo(BannerPhoneMobile)
