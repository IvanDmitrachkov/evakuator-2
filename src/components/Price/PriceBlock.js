import React from 'react'
import css from './Price.module.scss'
import Layout from '../Layout/Layout'
import PriceCard from './PriceCard'
import auto1 from '../../static/auto1.png'
import auto2 from '../../static/auto2.png'
import auto3 from '../../static/auto3.png'
import auto4 from '../../static/auto4.png'

const PriceBlock = () => (
  <div className={css.container}>
    <Layout>
      <h2>Цены и тарифы</h2>
      <div className={css.cardWrapper}>
        <PriceCard
          title={'До 1 тонны'}
          text={'Эвакуация небольших малолитражных автомобилей'}
          price={'3000'}
          image={auto1}
        />
        <PriceCard
          title={'До 2 тонны'}
          text={'Эвакуация небольших малолитражных автомобилей'}
          price={'3000'}
          image={auto2}
        />
        <PriceCard
          title={'До 3 тонны'}
          text={'Эвакуация небольших малолитражных автомобилей'}
          price={'3000'}
          image={auto3}
        />
        <PriceCard
          title={'До 4 тонны'}
          text={'Эвакуация небольших малолитражных автомобилей'}
          price={'3000'}
          image={auto4}
        />
      </div>
    </Layout>
  </div>
)

export default React.memo(PriceBlock)
