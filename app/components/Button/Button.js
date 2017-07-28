import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.scss'
import '../../styles/UI/themes/light/_button.global.scss'

export default class Button extends React.PureComponent {
  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string
  }

  getClassName () {
    const { size, type } = this.props

    return classnames('button', styles.button, styles[size], type, styles[type])
  }

  render () {
    return <button className={this.getClassName()} {...this.props} />
  }
}
