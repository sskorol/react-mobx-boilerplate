import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from '../Icon/Icon'

import styles from './InfoButton.scss'

export default class Button extends React.PureComponent {
  static propTypes = {
    size: PropTypes.string,
    classType: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string
  }

  render () {
    const { size, classType, icon, className, iconClassName, ...restProps } = this.props

    return (
      <button className={classnames('infoButton', styles.infoButton, styles[size], classType, styles[classType], className || '')} {...restProps}>
        {icon !== undefined ? <Icon className={iconClassName} size={size} subSize={'icon-s'} icon={icon} /> : null}
      </button>
    )
  }
}
