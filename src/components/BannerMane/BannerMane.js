import React from 'react'
import css from './BannerMane.module.scss'
import img from '../../static/Evakuator-dlya-vas-1024x768.jpg'
import Layout from '../Layout/Layout'
import { MOBILE_LONG_PHONE, MOBILE_PHONE } from '../../constants/phones'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <h1 className={css.title}>Эвакуатор в Сыктывкаре</h1>
        <a className={css.button} href={`tel:${MOBILE_LONG_PHONE}`}>Быстрый вызов</a>
        <a className={css.phone} href={`tel:${MOBILE_PHONE}`}>тел. 33-53-33</a>
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
