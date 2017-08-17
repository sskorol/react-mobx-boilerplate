import React from 'react'
import PropTypes from 'prop-types'

import styles from './Form.scss'

export default class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children, ...restProps } = this.props

    return (
      <div className={styles.form} {...restProps}>
        {children}
      </div>
    )
  }
}
