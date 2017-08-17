import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../Icon/Icon'

import styles from './Checkbox.scss'

export default class Checkbox extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string
  }

  render () {
    const { id, name, value, checked, size, className, ...restProps } = this.props

    return (
      <span className={classnames(styles.checkboxWrapper, styles[size], className || '')} {...restProps}>
        <input type='checkbox' id={id} name={name} value={value} checked={checked} className={classnames('checkbox', styles[size])} />
        <label htmlFor={id}>
          <Icon size={size} subSize={'icon-s'} icon={'check'} />
        </label>
      </span>
    )
  }
}
