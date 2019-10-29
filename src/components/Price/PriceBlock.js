import React from 'react'
import css from './Price.module.scss'
import Layout from '../Layout/Layout'
import PriceCard from './PriceCard'
import auto1 from '../../static/auto1.png'
import auto2 from '../../static/auto2.png'
import auto3 from '../../static/auto3.png'
import auto4 from '../../static/auto4.png'
import Padding from '../Padding/Padding'

export const items = [
  {
    title: 'До 1 тонны',
    text: 'Эвакуация малолитражных автомобилей',
    price: '1000',
    image: auto1
  },
  {
    title: 'До 1.5 тонны',
    text: 'Эвакуация легковых автомобилей',
    price: '1000',
    image: auto2
  },
  {
    title: 'До 2 тонны',
    text: 'Эвакуация кроссоверов и внедорожников',
    price: '1200',
    image: auto3
  },
  {
    title: 'До 2.5 тонны',
    text: 'Эвакуация крупной техники',
    price: '1300',
    image: auto4
  }
]

const PriceBlock = () => (
  <div className={css.container}>
    <Layout>
      <h2>Цены и тарифы</h2>
      <Padding value={40} />
      <div className={css.cardWrapper}>
        {
          items.map((item, key) => (
            <PriceCard
              key={key}
              {...item}
            />
          ))
        }
      </div>
      <PriceCard
        big
        {...{
          title: 'За городом и по России',
          text: 'Эвакуация любой техники',
          price: '40',
          priceInfo: 'за километр'
        }}
      />
    </Layout>
  </div>
)

export default React.memo(PriceBlock)
