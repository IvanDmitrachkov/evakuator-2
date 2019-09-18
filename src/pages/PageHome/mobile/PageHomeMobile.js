// packages
import React from 'react'
import s from './pageHomeMobile.module.scss'
import BannerMane from '../../../components/Mobile/BannerMane/BannerMane'
import Advantages from '../../../components/Mobile/Advantages/Advantages'
import Layout from '../../../components/Mobile/Layout/Layout'
import PriceBlock from '../../../components/Mobile/Price/PriceBlock'
import Footer from '../../../components/Mobile/Footer/Footer'

const PageHomeMobile = () => (
  <div className={s.container}>
    <BannerMane />
    <PriceBlock />

    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ marginBottom: '6rem' }}><span>Неожиданные неприятности в дороге могут случиться с каждым. Любой, даже практически новый автомобиль, который своевременно обслуживается в СЦ, не застрахован от поломки. В подобной ситуации закажите эвакуатор! Мы гарантируем Вам быстрое прибытие в любое время, а также недорогие расценки и бережное отношение к авто.</span>
      </div>
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
