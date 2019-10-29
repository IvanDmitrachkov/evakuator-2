import React from 'react'
import css from './PriceMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import PriceCard from './PriceCardMobile'
import { items } from './PriceBlock'
import Swiper from 'react-id-swiper'
import Padding from '../Padding/Padding'

const params = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  effect: 'coverflow',
  centeredSlides: true,
  slideClass: css.slide,
  loop: true,
  containerClass: css.containerSwiper,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const PriceBlockMobile = () => (
  <div className={css.container}>
    <Layout>
      <h2>Цены и тарифы</h2>
    </Layout>
    <Padding value={20} />
    <Swiper {...params}>
      {
        items.map((item, key) => (
          <div key={key}>
            <PriceCard
              key={key}
              {...item}
            />
          </div>
        ))
      }
      <div>
        <PriceCard
          big
          {...{
            title: 'За городом и по России',
            text: 'Эвакуация любой техники',
            price: '40',
            priceInfo: 'за километр'
          }}
        />
      </div>
    </Swiper>
  </div>
)

export default React.memo(PriceBlockMobile)
