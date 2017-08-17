import React from 'react'
import PropTypes from 'prop-types'

import styles from './FormRow.scss'

export default class FormRow extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props

    return (
      <div className={styles.formRow}>
        {children}
      </div>
    )
  }
}
