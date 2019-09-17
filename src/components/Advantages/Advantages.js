import React from 'react'
import css from './Advantages.module.scss'
import img1 from '../../static/worker.png'
import img2 from '../../static/customer-service.png'
import img3 from '../../static/purse.png'
const Advantages = () => (
  <div className={css.container}>
    <div className={css.wrapper}>
      <div className={css.card}>
        <img src={img3} alt={'adv1'} />
        <span>Доступные цены</span>
      </div>
      <div className={css.card}>
        <img src={img1} alt={'adv1'} style={{ marginBottom: '-2rem' }} />
        <span>Проффесиональные водители</span>
      </div>
      <div className={css.card}>
        <img src={img2} alt={'adv1'} />
        <span>Работаем круглосуточно</span>
      </div>
    </div>
  </div>
)

export default React.memo(Advantages)
