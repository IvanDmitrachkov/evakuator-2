import React from 'react'
import css from './HeaderMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'

const HeaderMobile = () => (
  <div className={css.container}>
    <Layout>
      <div className={css.phone}> {MOBILE_PHONE_STANDART_LINK}</div>
    </Layout>
  </div>
)

export default React.memo(HeaderMobile)
