// packages
import React from 'react'
import s from './pageHomeMobile.module.scss'
import BannerMane from '../../../components/BannerMane/BannerManeMobile'
import Advantages from '../../../components/Advantages/AdvantagesMobile'
import Layout from '../../../components/Layout/LayoutMobile'
import PriceBlock from '../../../components/Price/PriceBlockMobile'
import Footer from '../../../components/Footer/FooterMobile'
import { MOBILE_PHONE_BIG_LINK, MOBILE_PHONE_LINK } from '../../../constants/phones'
import Padding from '../../../components/Padding/Padding'

const PageHomeMobile = () => (
  <div className={s.container}>
    <BannerMane />
    <Padding value={50} />
    <PriceBlock />

    <Layout>
      <h2>Для вызова эвакуатора</h2>
      <p>Званите по номеру {MOBILE_PHONE_LINK} (короткий)</p>
      <p>Или на {MOBILE_PHONE_BIG_LINK}</p>
      <Padding value={50} />
      <h2>Вызовите эвакуатор</h2>
      <Padding value={20} />
      <span>Неожиданные неприятности в дороге могут случиться с каждым. Любой, даже практически новый автомобиль, который своевременно обслуживается в СЦ, не застрахован от поломки. В подобной ситуации закажите эвакуатор! Мы гарантируем Вам быстрое прибытие в любое время, а также недорогие расценки и бережное отношение к авто.</span>
      <Padding value={20} />
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России от 40Р за километр</span></li>
      </ul>
    </Layout>
    <Advantages />

    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ marginBottom: '8rem' }}><span>Оперативная подача эвакуатора в Сыктывкаре и регионах, безопасная транспортировка автомобиля – вот наша главная задача. И уже несколько лет мы успешно справляемся с этой задачей.</span>
      </div>
    </Layout>
    <Footer />
  </div>
)

export default React.memo(PageHomeMobile)
