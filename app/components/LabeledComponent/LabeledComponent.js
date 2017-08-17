import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Label from '../Label/Label'
import styles from './LabeledComponent.scss'

export default class LabeledComponent extends React.Component {
  static propTypes = {
    size: PropTypes.string,
    labelText: PropTypes.string,
    labelFor: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    className: '',
    label: null
  }

  render () {
    const { children, size, labelFor, labelText, ...restProps } = this.props

    return (
      <div className={classnames(styles.labeledComponent, styles[size])}>
        <Label size={size} labelFor={labelFor} text={labelText} {...restProps} />
        {children}
      </div>
    )
  }
}
