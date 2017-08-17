import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from '../Icon/Icon'

import styles from './Button.scss'

export default class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    classType: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    counterValue: PropTypes.number,
    isSquare: PropTypes.bool
  }

  render () {
    const { children, size, isSquare, classType, icon, counterValue, className, iconClassName, ...restProps } = this.props
    const squareClass = isSquare ? 'square' : ''

    return (
      <button className={classnames('button', styles.button, styles[size], styles[squareClass], classType, styles[classType], className || '')} {...restProps}>
        {icon !== undefined ? <Icon className={iconClassName} size={size} subSize={'icon-m'} icon={icon} /> : null}
        {children !== undefined ? <span className={icon !== undefined ? styles.textWithIcon : ''}>{children}</span> : ''}
        {counterValue !== undefined ? <span className={classnames('counterWrapper', styles.counterWrapper, styles[size])}>{counterValue}</span> : null}
      </button>
    )
  }
}
