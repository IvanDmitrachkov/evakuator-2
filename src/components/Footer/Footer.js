import React from 'react'
import css from './Footer.module.scss'
import img from '../../static/footer.png'
import Layout from '../Layout/Layout'
import { MOBILE_LONG_PHONE } from '../../constants/phones'
import Padding from '../Padding/Padding'

const Footer = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>335 333</div>
          <p>Эвакуатор Сыктывкар</p>
          <Padding value={40} />
          <div className={css.socials}>
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.viber} />
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.wa} />
            <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.vk} />
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
