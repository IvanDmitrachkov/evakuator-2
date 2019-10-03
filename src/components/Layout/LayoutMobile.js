import React from 'react'
import PropTypes from 'prop-types'
import css from './LayoutMobile.module.scss'

const LayoutMobile = ({ children }) => (
  <div className={css.layout}>{children}</div>
)
LayoutMobile.propTypes = {
  children: PropTypes.node
}
export default React.memo(LayoutMobile)
