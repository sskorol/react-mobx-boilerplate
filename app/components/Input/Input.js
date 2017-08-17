import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Input.scss'

export default class Input extends React.Component {
  static propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    setRef: PropTypes.func,
    placeholderText: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  constructor (props) {
    super(props)

    let value = props.value

    if (value === undefined) value = ''

    this.state = {
      value: value
    }

    this.setRef = this.setRef.bind(this)
    this.onChange = this.onChange.bind(this)
    this.triggerFocus = this.onChange.bind(this)
    this.onBlur = this.onChange.bind(this)
  }

  onBlur (e) {
    this.props.onBlur(e)
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    })

    this.props.onChange(e)
  }

  setRef (input) {
    this.input = input
  }

  render () {
    const { placeholderText, size, type, ...restProps } = this.props

    return (
      <input
        {...restProps}
        value={this.state.value}
        ref={this.setRef}
        type={type}
        placeholder={this.props.placeholderText}
        onBlur={this.onBlur}
        onChange={this.onChange}
        className={classnames('input', styles.input, styles[size])}
      />
    )
  }
}
