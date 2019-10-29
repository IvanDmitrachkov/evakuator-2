import React from 'react'
import css from './BannerKomiMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'
import Padding from '../Padding/Padding'

const BannerKomiMobile = () => (
  <div className={css.image}>
    <div className={css.container}>
      <Layout>
        <h2>Работаем по Сыктывкару и Республике Коми</h2>
        <Padding value={40} />
        <div className={css.text}>
          <p>Оперативная подача эвакуатора в Сыктывкаре и регионах, безопасная транспортировка автомобиля – вот наша
            главная задача. И уже несколько лет мы успешно справляемся с этой задачей.</p>
          <p>Готовы взяться за заказ по России!</p>
          <Padding value={40} />
          <div className={css.phone}>
            {MOBILE_PHONE_STANDART_LINK}
          </div>
        </div>
      </Layout>
    </div>
  </div>
)

export default React.memo(BannerKomiMobile)
