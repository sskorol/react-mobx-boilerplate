import React from 'react'
import PropTypes from 'prop-types'
import MonthDropdownOptions from './month_dropdown_options'
import onClickOutside from 'react-onclickoutside'
import moment from 'moment'
import Button from '../../../Button/Button'

import styles from './month_dropdown.scss'

const WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions)

export default class MonthDropdown extends React.Component {
  static propTypes = {
    locale: PropTypes.string,
    dateFormat: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    dropdownVisible: false
  }

  renderSelectOptions = monthNames =>
    monthNames.map((M, i) => (
      <option key={i} value={i}>{M}</option>
    ))

  renderReadView = (visible, monthNames) => (
    <Button key='read' size={'medium'} classType={'transparent'} onClick={this.toggleDropdown}>
      {monthNames[this.props.month]}
    </Button>
  )

  renderDropdown = monthNames => (
    <WrappedMonthDropdownOptions
      key='dropdown'
      ref='options'
      month={this.props.month}
      monthNames={monthNames}
      onChange={this.onChange}
      onCancel={this.toggleDropdown} />
  )

  renderScrollMode = (monthNames) => {
    const { dropdownVisible } = this.state
    let result = [this.renderReadView(!dropdownVisible, monthNames)]
    if (dropdownVisible) {
      result.unshift(this.renderDropdown(monthNames))
    }
    return result
  }

  onChange = (month) => {
    this.toggleDropdown()
    if (month !== this.props.month) {
      this.props.onChange(month)
    }
  }

  toggleDropdown = (e) => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  }

  render () {
    const localeData = moment.localeData(this.props.locale)
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      (M) => localeData.months(moment({M}), this.props.dateFormat)
    )

    return (
      <div
        className={styles.dropDownContainer}>
        {this.renderScrollMode(monthNames)}
      </div>
    )
  }
}
