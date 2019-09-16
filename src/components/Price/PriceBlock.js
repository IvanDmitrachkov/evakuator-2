import React from 'react'
import css from './Price.module.scss'
import Layout from '../Layout/Layout'
import PriceCard from './PriceCard'
const PriceBlock = () => (
  <div className={css.container} >
    <Layout>
      <h2 >Цены и тарифы</h2>
      <div className={css.cardWrapper}>
        <PriceCard
          title={'До 1 тонны'}
          text={'Эвакуация небольших малолитражных автомобилей'}
          price={'3000'}
          image={'1'}
        />
      </div>
    </Layout>
  </div>
)

export default React.memo(PriceBlock)
