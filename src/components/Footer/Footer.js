import React from 'react'
import css from './Footer.module.scss'
import img from '../../static/footer.png'
import Layout from '../Layout/Layout'

const Footer = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>335 333</div>
          <p>Эвакуатор Сыктывкар</p>
          <p style={{ marginTop: '2rem', marginBottom: '6rem' }}>Круглосуточно, без выходных</p>
          <div className={css.socials}>
            <a href={'viber://add?number=%2B791286353333'} className={css.viber} />
            <a href={'whatsapp://send?phone=791286353333'} className={css.wa} />
            <a href={'tel:891286353333'} className={css.vk} />
          </div>
        </div>
        <div className={css.hr} />
        <div className={css.brand}>
          <span>Made by UncleSpace group</span>
          <div className={css.logo} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(Footer)
