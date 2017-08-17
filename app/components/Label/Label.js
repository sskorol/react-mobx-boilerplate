import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Label.scss'

export default class Label extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    labelFor: PropTypes.string
  }
  static defaultProps = {
    text: '',
    onClick: null
  }

  render () {
    const { text, size, labelFor } = this.props

    return (
      <label className={classnames('label', styles.label, styles[size])} htmlFor={labelFor}>
        {text}
      </label>
    )
  }
}
