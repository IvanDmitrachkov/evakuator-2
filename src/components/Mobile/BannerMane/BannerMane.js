import React from 'react'
import css from './BannerMane.module.scss'
import img from '../../../static/5633408c216ba.png'
import Layout from '../Layout/Layout'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <h1 className={css.title}>Эвакуатор в Сыктывкаре</h1>
        <a href={'tel:891286353333'} className={css.button}>Быстрый вызов</a>
        <div className={css.phone}>тел. 335 333</div>
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
