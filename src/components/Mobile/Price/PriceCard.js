import React from 'react'
import css from './Price.module.scss'
import PropTypes from 'prop-types'

const PriceCard = ({ title, text, price, image }) => (
  <div className={css.card}>
    <div className={css.textWrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      <div className={css.price}>от {price}Р</div>
    </div>
    <a href={'tel:891286353333'} className={css.button}>
      <div >Вызвать</div>
    </a>
  </div>
)

PriceCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string
}

export default React.memo(PriceCard)
