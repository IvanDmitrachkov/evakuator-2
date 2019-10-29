// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import BannerMane from '../../../components/BannerMane/BannerMane'
import Advantages from '../../../components/Advantages/Advantages'
import PriceBlock from '../../../components/Price/PriceBlock'
import Footer from '../../../components/Footer/Footer'
import Layout from '../../../components/Layout/Layout'
import Padding from '../../../components/Padding/Padding'
import BannerPhone from '../../../components/BannerPhone/BannerPhone'
import BannerKomi from '../../../components/BannerKomi/BannerKomi'
import Header from '../../../components/Header/Header'
import SectionContacts from '../../../components/SectionContacts/SectionContacts'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <Header />
    <BannerMane />
    <Advantages />
    <BannerPhone />
    <Layout className={s.content} >
      <Padding value={80} />
      <h2>Услуги эвакуатора</h2>
      <div style={{ width: '75rem', marginBottom: '2rem' }}><span>Неожиданные неприятности в дороге могут случиться с каждым. Любой, даже практически новый автомобиль, который своевременно обслуживается в СЦ, не застрахован от поломки. В подобной ситуации закажите эвакуатор! Мы гарантируем Вам быстрое прибытие в любое время, а также недорогие расценки и бережное отношение к авто.</span></div>
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России от 40Р за километр</span></li>
      </ul>
    </Layout>
    <Padding value={120} />
    <BannerKomi />
    <Padding value={120} />
    <PriceBlock />
    <Padding value={120} />
    <SectionContacts />
    <Padding value={120} />
    <Footer />
  </div>
)

export default React.memo(PageHomeDesktop)
