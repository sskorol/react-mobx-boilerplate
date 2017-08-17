import React from 'react'
import PropTypes from 'prop-types'
import YearDropdownOptions from './year_dropdown_options'
import onClickOutside from 'react-onclickoutside'

import Button from '../../../Button/Button'

import styles from './year_dropdown.scss'

var WrappedYearDropdownOptions = onClickOutside(YearDropdownOptions)

export default class YearDropdown extends React.Component {
  static propTypes = {
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    scrollableYearDropdown: PropTypes.bool,
    year: PropTypes.number.isRequired,
    yearDropdownItemNumber: PropTypes.number
  }

  state = {
    dropdownVisible: false
  }

  renderSelectOptions = () => {
    const minYear = this.props.minDate ? this.props.minDate.year() : 1900
    const maxYear = this.props.maxDate ? this.props.maxDate.year() : 2100

    const options = []
    for (let i = minYear; i <= maxYear; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  onSelectChange = (e) => {
    this.onChange(e.target.value)
  }

  renderReadView = (visible) => (
    <Button key='read' size={'medium'} classType={'transparent'} onClick={this.toggleDropdown}>
      {this.props.year}
    </Button>
  )

  renderDropdown = () => (
    <WrappedYearDropdownOptions
      key='dropdown'
      ref='options'
      year={this.props.year}
      onChange={this.onChange}
      onCancel={this.toggleDropdown}
      scrollableYearDropdown={this.props.scrollableYearDropdown}
      yearDropdownItemNumber={this.props.yearDropdownItemNumber} />
  )

  renderScrollMode = () => {
    const { dropdownVisible } = this.state
    let result = [this.renderReadView(!dropdownVisible)]
    if (dropdownVisible) {
      result.unshift(this.renderDropdown())
    }
    return result
  }

  onChange = (year) => {
    this.toggleDropdown()
    if (year === this.props.year) return
    this.props.onChange(year)
  }

  toggleDropdown = (e) => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  }

  render () {
    return (
      <div
        className={styles.dropDownContainer}>
        {this.renderScrollMode()}
      </div>
    )
  }
}
