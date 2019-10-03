import React from 'react'
import css from './PriceMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import PriceCard from './PriceCardMobile'
import { items } from './PriceBlock'
import Padding from '../Padding/Padding'

const PriceBlockMobile = () => (
  <div className={css.container}>
    <Layout>
      <h2>Цены и тарифы</h2>
      <Padding value={20} />
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
    </Layout>
  </div>
)

export default React.memo(PriceBlockMobile)
