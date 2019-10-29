import React from 'react'
import css from './BannerPhone.module.scss'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'
import Layout from '../Layout/Layout'

const BannerPhone = () => (
  <div className={css.container}>
    <Layout>
      <h2>Для вызова эвакуатора звоните</h2>
      <div>{MOBILE_PHONE_STANDART_LINK}</div>
    </Layout>
  </div>
)

export default React.memo(BannerPhone)
