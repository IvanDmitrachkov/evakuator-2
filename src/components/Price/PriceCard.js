import React from 'react'
import css from './Price.module.scss'
import PropTypes from 'prop-types'
import { MOBILE_LONG_PHONE } from '../../constants/phones'
import Padding from '../Padding/Padding'

const PriceCard = ({ title, text, price, image, big, priceInfo }) => (
  <div className={big ? css.card__big : css.card}>
    <div className={css.textWrapper}>
      <div className={css.title}>{title}</div>
      <Padding value={10} />
      <div className={css.text}>{text}</div>
      <Padding value={10} />
      <div className={css.price}>от {price} ₽ <span>{priceInfo}</span></div>
      <Padding value={10} />
      <div className={css.annotation}>* Цены указаны за подачу</div>
    </div>
    <div className={css.image} style={{ backgroundImage: `url(${image})` }} />
    <div className={css.button}><a href={`tel:${MOBILE_LONG_PHONE}`}>Вызвать</a></div>
  </div>
)

PriceCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  big: PropTypes.bool,
  priceInfo: PropTypes.string
}

export default React.memo(PriceCard)
