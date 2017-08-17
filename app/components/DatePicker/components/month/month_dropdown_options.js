import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './month_dropdown.scss'

export default class MonthDropdownOptions extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }

  renderOptions = () => {
    return this.props.monthNames.map((month, i) => {
      const selectedMonthClassName = this.props.month === i ? 'selectedDatePickerDropDownOption' : ''

      return <div className={classnames('datePickerDropDownOption', styles.monthOption, selectedMonthClassName)}
        key={month}
        ref={month}
        onClick={() => this.onChange(i)}>
        {month}
      </div>
    }
    )
  }

  onChange = (month) => this.props.onChange(month)

  handleClickOutside = () => this.props.onCancel()

  render () {
    return (
      <div className={classnames('datePickerDropDown', styles.monthDropDown)}>
        {this.renderOptions()}
      </div>
    )
  }
}
