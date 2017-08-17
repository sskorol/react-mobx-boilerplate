import React from 'react'
import PropTypes from 'prop-types'

import styles from './FormSection.scss'

export default class FormSection extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props

    return (
      <div className={styles.formSection}>
        {children}
      </div>
    )
  }
}
