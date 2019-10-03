import React from 'react'
import css from './PriceMobile.module.scss'
import PropTypes from 'prop-types'
import { MOBILE_LONG_PHONE } from '../../constants/phones'

const PriceCardMobile = ({ title, text, price, image }) => (
  <div className={css.card}>
    <div className={css.textWrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      <div className={css.price}>от {price}Р</div>
    </div>
    <a href={`tel:${MOBILE_LONG_PHONE}`} className={css.button}>Вызвать</a>
    <div className={css.annotation}>* Цены указаны за подачу</div>
  </div>
)

PriceCardMobile.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string
}

export default React.memo(PriceCardMobile)
