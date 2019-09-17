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
      <h2>Услуги эвакуатора</h2>
      <div style={{ width: '75rem', marginBottom: '6rem' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России</span></li>
      </ul>
    </Layout>
    <PriceBlock />
    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ width: '75rem', marginBottom: '8rem' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
    </Layout>
    <Footer />
  </div>
)

export default React.memo(PageHomeDesktop)
