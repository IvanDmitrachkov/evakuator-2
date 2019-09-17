import React from 'react'
import css from './Price.module.scss'
import Layout from '../Layout/Layout'
import PriceCard from './PriceCard'
import auto1 from '../../../static/auto1.png'
import auto2 from '../../../static/auto2.png'
import auto3 from '../../../static/auto3.png'
import auto4 from '../../../static/auto4.png'

const PriceBlock = () => (
  <div className={css.container}>
    <Layout>
      <h2>Цены и тарифы</h2>
      <div className={css.cardWrapper}>
        <PriceCard
          title={'До 1 тонны'}
          text={'Эвакуация малолитражных автомобилей'}
          price={'1500'}
          image={auto1}
        />
        <PriceCard
          title={'До 1.5 тонны'}
          text={'Эвакуация легковых автомобилей'}
          price={'1700'}
          image={auto2}
        />
        <PriceCard
          title={'До 2 тонны'}
          text={'Эвакуация кроссоверов и внедорожников'}
          price={'1900'}
          image={auto3}
        />
        <PriceCard
          title={'До 2.5 тонны'}
          text={'Эвакуация крупной техники'}
          price={'2100'}
          image={auto4}
        />
      </div>
    </Layout>
  </div>
)

export default React.memo(PriceBlock)
