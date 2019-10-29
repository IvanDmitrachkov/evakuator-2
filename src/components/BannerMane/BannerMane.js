import React from 'react'
import css from './BannerMane.module.scss'
import img from '../../static/H0AAAgJ2uuA-1920.jpg'
import Layout from '../Layout/Layout'
import { MOBILE_LONG_PHONE, MOBILE_PHONE } from '../../constants/phones'
import Padding from '../Padding/Padding'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <a className={css.phone} href={`tel:${MOBILE_PHONE}`}>33-53-33</a>
        <Padding value={40} />

        <h1 className={css.title}>Услуги эвакуатора</h1>

        <a className={css.button} href={`tel:${MOBILE_LONG_PHONE}`}>Быстрый вызов</a>
        <div className={css.socials}>
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.viber} />
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.wa} />
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.vk} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerMane)
