import React from 'react'
// import PropTypes from 'prop-types'
import css from './SectionContactsMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import { MdPhone, MdAccessTime, MdLocationOn } from 'react-icons/md'
import { FaViber, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'

const SectionContactsMobile = () => (
  <div className={css.container}>
    <Layout className={css.wrapper}>
      <div className={css.img} />
      <div className={css.content}>
        <div className={css.title}>Услуги эвакуатора</div>
        <ul>
          <li>
            <MdLocationOn className={css.icon} size={'2rem'} />
            <div className={css.address}>
              <div>Сыктывкар, Республика Коми</div>
            </div>
          </li>
          <li>
            <MdPhone className={css.icon} size={'2rem'} />
            {MOBILE_PHONE_STANDART_LINK}
          </li>
          <li>
            <MdAccessTime className={css.icon} size={'2rem'} />
            <div>Круглосуточно, 24/7</div>
          </li>
          <li className={css.social}>
            <a href={`tel:${MOBILE_LONG_PHONE}`}><FaViber size={'3rem'} /></a>
            <a href={`tel:${MOBILE_LONG_PHONE}`}><FaPhone size={'3rem'} /></a>
            <a href={`tel:${MOBILE_LONG_PHONE}`}><FaWhatsapp size={'3rem'} /></a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
)

export default React.memo(SectionContactsMobile)
