import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Divider.scss'

export default class Divider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.string
  }

  render () {
    const { className, position, ...restProps } = this.props

    return (
      <div {...restProps} className={classnames('divider', styles[position], className || '')} />
    )
  }
}
