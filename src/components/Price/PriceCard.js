import React from 'react'
import css from './Price.module.scss'
import PropTypes from 'prop-types'

const PriceCard = ({ title, text, price, image }) => (
  <div className={css.card}>
    <div className={css.textWrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      <div className={css.price}>от {price}Р</div>
      <div className={css.annotation}>* Цены указаны за подачу</div>
    </div>
    <div className={css.image} style={{ backgroundImage: `url(${image})` }} />
    <div className={css.button}>Вызвать</div>
  </div>
)

PriceCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string
}

export default React.memo(PriceCard)
