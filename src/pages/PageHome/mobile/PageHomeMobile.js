// packages
import React from 'react'
import s from '../desktop/pageHomeDesktop.module.scss'
import BannerMane from '../../../components/Mobile/BannerMane/BannerMane'
import Advantages from '../../../components/Mobile/Advantages/Advantages'
import Layout from '../../../components/Mobile/Layout/Layout'
import PriceBlock from '../../../components/Mobile/Price/PriceBlock'
import Footer from '../../../components/Mobile/Footer/Footer'

const PageHomeMobile = () => (
  <div className={s.container}>
    <BannerMane />
    <Advantages />
    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ marginBottom: '6rem' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <ul>
        <li><span>Эвакуация с места поломки или аварии</span></li>
        <li><span>Буксировка автомобиля</span></li>
        <li><span>Перевозка машины по России</span></li>
      </ul>
    </Layout>
    <PriceBlock />
    <Layout>
      <h2>Услуги эвакуатора</h2>
      <div style={{ marginBottom: '8rem' }}><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
    </Layout>
    <Footer />
  </div>
)

export default React.memo(PageHomeMobile)
