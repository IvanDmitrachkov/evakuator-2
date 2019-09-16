import React from 'react'
import css from './BannerMane.module.scss'
import img from '../../static/5633408c216ba.png'
import Layout from '../Layout/Layout'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <h1 className={css.title}>Эвакуатор в Сыктывкаре</h1>
        <div className={css.button}>Быстрый вызов</div>
        <div className={css.phone}>тел. 885 569</div>
        <div className={css.socials}>
          <a className={css.viber} />
          <a className={css.wa} />
          <a className={css.vk} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerMane)
