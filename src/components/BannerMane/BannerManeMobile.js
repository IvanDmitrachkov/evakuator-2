import React from 'react'
import css from './BannerManeMobile.module.scss'
import img from '../../static/Evakuator-dlya-vas-1024x768.jpg'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_PHONE } from '../../constants/phones'

const BannerManeMobile = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <h1 className={css.title}>Эвакуатор в Сыктывкаре</h1>
        <a href={`tel:${MOBILE_PHONE}`} className={css.button}>Быстрый вызов</a>
        <a href={`tel:${MOBILE_PHONE}`} className={css.phone}>тел. 33-53-33</a>
        <div className={css.socials}>
          <a href={`tel:${MOBILE_PHONE}`} className={css.viber} />
          <a href={`tel:${MOBILE_PHONE}`} className={css.wa} />
          <a href={`tel:${MOBILE_PHONE}`} className={css.vk} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerManeMobile)
