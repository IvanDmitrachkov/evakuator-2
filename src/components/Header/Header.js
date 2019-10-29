import React from 'react'
import css from './Header.module.scss'
import Layout from '../Layout/Layout'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'

const Header = () => (
  <div className={css.container}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.phone}> {MOBILE_PHONE_STANDART_LINK}</div>
        <div>Без выходных, 24/7</div>
      </div>
      <div />
    </Layout>
  </div>
)

export default React.memo(Header)
