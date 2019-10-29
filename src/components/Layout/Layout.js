import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Layout.module.scss'

const Layout = ({ children, className }) => (
  <div className={cn(css.layout, className)}>{children}</div>
)
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
export default React.memo(Layout)
