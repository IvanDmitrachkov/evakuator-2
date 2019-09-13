import React from 'react'
import css from './BannerMane.module.scss'
import img from 'static/5633408c216ba.png'
import Layout from '../Layout/Layout'

const BannerMane = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div>
        <h1 className={css.title}>Эвакуатор</h1>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerMane)
