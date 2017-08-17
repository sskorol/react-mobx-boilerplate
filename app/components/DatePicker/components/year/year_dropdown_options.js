import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../../Icon/Icon'
import styles from './year_dropdown.scss'

function generateYears (year, noOfYear) {
  var list = []
  for (var i = 0; i < (2 * noOfYear + 1); i++) {
    list.push(year + noOfYear - i)
  }
  return list
}

export default class YearDropdownOptions extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    scrollableYearDropdown: PropTypes.bool,
    year: PropTypes.number.isRequired,
    yearDropdownItemNumber: PropTypes.number
  }

  constructor (props) {
    super(props)
    const { yearDropdownItemNumber, scrollableYearDropdown } = props
    const noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5)

    this.state = {
      yearsList: generateYears(this.props.year, noOfYear)
    }
  }

  renderOptions = () => {
    var selectedYear = this.props.year
    var options = this.state.yearsList.map(year => {
      const selectedYearClassName = selectedYear === year ? 'selectedDatePickerDropDownOption' : ''

      return <div className={classnames('datePickerDropDownOption', styles.yearOption, selectedYearClassName)}
        key={year}
        ref={year}
        onClick={() => this.onChange(year)}>
        {year}
      </div>
    }
    )

    options.unshift(
      <div className={classnames('yearOptionUpcoming', styles.yearOptionUpcoming)} ref={'upcoming'} key={'upcoming'} onClick={this.incrementYears}>
        <Icon size={'medium'} subSize={'icon-s'} icon={'chevronUp'} />
      </div>
    )
    options.push(
      <div className={classnames('yearOptionPrevious', styles.yearOptionPrevious)} ref={'previous'} key={'previous'} onClick={this.decrementYears}>
        <Icon size={'medium'} subSize={'icon-s'} icon={'chevronDown'} />
      </div>
    )
    return options
  }

  onChange = (year) => {
    this.props.onChange(year)
  }

  handleClickOutside = () => {
    this.props.onCancel()
  }

  shiftYears = (amount) => {
    var years = this.state.yearsList.map(function (year) {
      return year + amount
    })

    this.setState({
      yearsList: years
    })
  }

  incrementYears = () => {
    return this.shiftYears(1)
  }

  decrementYears = () => {
    return this.shiftYears(-1)
  }

  render () {
    let dropdownClass = classnames('datePickerDropDown', styles.yearDropDown,
      {
        [styles.scrollable]: this.props.scrollableYearDropdown
      })

    return (
      <div className={dropdownClass}>
        {this.renderOptions()}
      </div>
    )
  }
}
