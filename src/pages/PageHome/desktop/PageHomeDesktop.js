// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import BannerMane from '../../../components/BannerMane/BannerMane'
import Advantages from '../../../components/Advantages/Advantages'
import PriceBlock from '../../../components/Price/PriceBlock'
import Footer from '../../../components/Footer/Footer'
import Layout from '../../../components/Layout/Layout'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <BannerMane />
    <Advantages />
    <Layout>
      <h2>Вызовите эвакуатор</h2>
      <div style={{ width: '75rem', marginBottom: '6rem' }}><span>Неожиданные неприятности в дороге могут случиться с каждым. Любой, даже практически новый автомобиль, который своевременно обслуживается в СЦ, не застрахован от поломки. В подобной ситуации закажите эвакуатор! Мы гарантируем Вам быстрое прибытие в любое время, а также недорогие расценки и бережное отношение к авто.</span></div>
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России от 40Р за километр</span></li>
      </ul>
    </Layout>
    <PriceBlock />
    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ width: '75rem', marginBottom: '13rem' }}><span>Оперативная подача эвакуатора в Сыктывкаре и регионах, безопасная транспортировка автомобиля – вот наша главная задача. И уже несколько лет мы успешно справляемся с этой задачей.</span></div>
    </Layout>
    <Footer />
  </div>
)

export default React.memo(PageHomeDesktop)
