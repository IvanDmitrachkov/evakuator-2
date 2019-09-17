import React from 'react'
import css from './BannerMane.module.scss'
import img from '../../static/Evakuator-dlya-vas-1024x768.jpg'
import Layout from '../Layout/Layout'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <h1 className={css.title}>Эвакуатор в Сыктывкаре</h1>
        <a className={css.button}>Быстрый вызов</a>
        <a className={css.phone} href={'tel:891286353333'}>тел. 335 333</a>
        <div className={css.socials}>
          <a href={'viber://add?number=%2B791286353333'} className={css.viber} />
          <a href={'whatsapp://send?phone=791286353333'} className={css.wa} />
          <a href={'tel:891286353333'} className={css.vk} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerMane)
