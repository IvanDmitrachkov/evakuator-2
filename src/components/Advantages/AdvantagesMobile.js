import React from 'react'
import css from './AdvantagesMobile.module.scss'
import img1 from '../../static/worker.png'
import img3 from '../../static/purse.png'
import img2 from '../../static/customer-service.png'
import Swiper from 'react-id-swiper'

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

const AdvantagesMobile = () => (
  <div className={css.container}>
    <Swiper {...params}>
      <div>
        <div className={css.card}>
          <img src={img3} alt={'adv1'} />
          <span>Доступные цены</span>
        </div>
      </div>
      <div>
        <div className={css.card}>
          <img src={img1} alt={'adv1'} style={{ marginBottom: '-2rem' }} />
          <span>Профессиональные водители</span>
        </div>
      </div>
      <div>
        <div className={css.card}>
          <img src={img2} alt={'adv1'} />
          <span>Работаем круглосуточно</span>
        </div>
      </div>
    </Swiper>
  </div>
)

export default React.memo(AdvantagesMobile)
