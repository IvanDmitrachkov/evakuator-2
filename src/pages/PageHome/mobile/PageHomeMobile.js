// packages
import React from 'react'
import s from './pageHomeMobile.module.scss'
import BannerMane from '../../../components/BannerMane/BannerManeMobile'
import Advantages from '../../../components/Advantages/AdvantagesMobile'
import Layout from '../../../components/Layout/LayoutMobile'
import PriceBlock from '../../../components/Price/PriceBlockMobile'
import Footer from '../../../components/Footer/FooterMobile'
import Padding from '../../../components/Padding/Padding'
import HeaderMobile from '../../../components/Header/HeaderMobile'
import BannerPhoneMobile from '../../../components/BannerPhone/BannerPhoneMobile'
import BannerKomiMobile from '../../../components/BannerKomi/BannerKomiMobile'
import SectionContactsMobile from '../../../components/SectionContacts/SectionContactsMobile'

const PageHomeMobile = () => (
  <div className={s.container}>
    <HeaderMobile />
    <BannerMane />
    <Padding value={50} />
    <PriceBlock />
    <Padding value={50} />
    <BannerPhoneMobile />
    <Layout className={s.content}>
      <Padding value={50} />
      <h2>Услуги эвакуатора</h2>
      <Padding value={10} />
      <span>Неожиданные неприятности в дороге могут случиться с каждым. Любой, даже практически новый автомобиль, который своевременно обслуживается в СЦ, не застрахован от поломки. В подобной ситуации закажите эвакуатор! Мы гарантируем Вам быстрое прибытие в любое время, а также недорогие расценки и бережное отношение к авто.</span>
      <Padding value={20} />
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России от 40Р за километр</span></li>
      </ul>
    </Layout>
    <Padding value={50} />
    <Advantages />
    <Padding value={50} />
    <BannerKomiMobile />
    <Padding value={50} />
    <SectionContactsMobile />
    <Footer />
  </div>
)

export default React.memo(PageHomeMobile)
