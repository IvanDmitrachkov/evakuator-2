import React from 'react'
import css from './BannerManeMobile.module.scss'
import img from '../../static/H0AAAgJ2uuA-1920.jpg'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_LINK } from '../../constants/phones'
import Padding from '../Padding/Padding'

const BannerManeMobile = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.phone} >{MOBILE_PHONE_LINK}</div>
        <Padding value={20} />
        <h1 className={css.title}>Услуги эвакуатора</h1>
        <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.button}>Быстрый вызов</a>
        <div className={css.socials}>
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.viber} />
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.wa} />
          <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.vk} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerManeMobile)
