import moment from 'moment'
import YearDropdown from '../year/year_dropdown'
import MonthDropdown from '../month/month_dropdown'
import Month from '../month/month'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isSameDay, allDaysDisabledBefore, allDaysDisabledAfter, getEffectiveMinDate, getEffectiveMaxDate } from '../../utils/date_utils'
import Button from '../../../Button/Button'
import Divider from '../../../Divider/Divider'

import styles from './calendar.scss'

const DROPDOWN_FOCUS_CLASSNAMES = [
  'react-datepicker__year-select',
  'react-datepicker__month-select'
]

const isDropdownSelect = (element = {}) => {
  const classNames = (element.className || '').split(/\s+/)
  return DROPDOWN_FOCUS_CLASSNAMES.some(testClassname => classNames.indexOf(testClassname) >= 0)
}

export default class Calendar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.array,
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    monthsShown: PropTypes.number,
    onClickOutside: PropTypes.func.isRequired,
    onMonthChange: PropTypes.func,
    forceShowMonthNavigation: PropTypes.bool,
    onDropdownFocus: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    onWeekSelect: PropTypes.func,
    openToDate: PropTypes.object,
    peekNextMonth: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    startDate: PropTypes.object,
    todayButton: PropTypes.string,
    useWeekdaysShort: PropTypes.bool,
    utcOffset: PropTypes.number,
    weekLabel: PropTypes.string,
    yearDropdownItemNumber: PropTypes.number
  }

  static get defaultProps () {
    return {
      onDropdownFocus: () => {},
      utcOffset: moment.utc().utcOffset(),
      monthsShown: 1,
      forceShowMonthNavigation: false
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      date: this.localizeMoment(this.getDateInView()),
      selectingDate: null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.preSelection && !isSameDay(nextProps.preSelection, this.props.preSelection)) {
      this.setState({
        date: this.localizeMoment(nextProps.preSelection)
      })
    } else if (nextProps.openToDate && !isSameDay(nextProps.openToDate, this.props.openToDate)) {
      this.setState({
        date: this.localizeMoment(nextProps.openToDate)
      })
    }
  }

  handleClickOutside = (event) => {
    this.props.onClickOutside(event)
  }

  handleDropdownFocus = (event) => {
    if (isDropdownSelect(event.target)) {
      this.props.onDropdownFocus()
    }
  }

  getDateInView = () => {
    const { preSelection, selected, openToDate, utcOffset } = this.props
    const minDate = getEffectiveMinDate(this.props)
    const maxDate = getEffectiveMaxDate(this.props)
    const current = moment.utc().utcOffset(utcOffset)
    const initialDate = openToDate || selected || preSelection
    if (initialDate) {
      return initialDate
    } else {
      if (minDate && current.isBefore(minDate)) {
        return minDate
      } else if (maxDate && current.isAfter(maxDate)) {
        return maxDate
      }
    }
    return current
  }

  localizeMoment = date => date.clone().locale(this.props.locale || moment.locale())

  increaseMonth = () => {
    this.setState({
      date: this.state.date.clone().add(1, 'month')
    }, () => this.handleMonthChange(this.state.date))
  }

  decreaseMonth = () => {
    this.setState({
      date: this.state.date.clone().subtract(1, 'month')
    }, () => this.handleMonthChange(this.state.date))
  }

  handleDayClick = (day, event) => this.props.onSelect(day, event)

  handleDayMouseEnter = day => this.setState({ selectingDate: day })

  handleMonthMouseLeave = () => this.setState({ selectingDate: null })

  handleMonthChange = (date) => {
    if (this.props.onMonthChange) {
      this.props.onMonthChange(date)
    }
  }

  changeYear = (year) => {
    this.setState({
      date: this.state.date.clone().set('year', year)
    })
  }

  changeMonth = (month) => {
    this.setState({
      date: this.state.date.clone().set('month', month)
    }, () => this.handleMonthChange(this.state.date))
  }

  header = (date = this.state.date) => {
    const startOfWeek = date.clone().startOf('week')
    const dayNames = []
    if (this.props.showWeekNumbers) {
      dayNames.push(
        <div key='W' className={styles.weekDayName}>
          {this.props.weekLabel || '#'}
        </div>
      )
    }
    return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(offset => {
      const day = startOfWeek.clone().add(offset, 'days')
      const weekDayName = this.props.useWeekdaysShort
          ? day.localeData().weekdaysShort(day)
          : day.localeData().weekdaysMin(day)
      return (
        <div key={offset} className={classnames('weekDayName', styles.weekDayName)}>
          {weekDayName}
        </div>
      )
    }))
  }

  renderPreviousMonthButton = () => {
    if (!this.props.forceShowMonthNavigation && allDaysDisabledBefore(this.state.date, 'month', this.props)) {
      return
    }

    return <Button
      isSquare
      icon={'chevronLeft'}
      size={'medium'}
      classType={'secondary'}
      onClick={this.decreaseMonth}
    />
  }

  renderNextMonthButton = () => {
    if (!this.props.forceShowMonthNavigation && allDaysDisabledAfter(this.state.date, 'month', this.props)) {
      return
    }

    return <Button
      isSquare
      icon={'chevronRight'}
      size={'medium'}
      classType={'secondary'}
      onClick={this.increaseMonth}
    />
  }

  renderYearDropdown = (overrideHide = false) => {
    if (!this.props.showYearDropdown || overrideHide) {
      return
    }
    return (
      <YearDropdown
        onChange={this.changeYear}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        year={this.state.date.year()}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber} />
    )
  }

  renderMonthDropdown = (overrideHide = false) => {
    if (!this.props.showMonthDropdown) {
      return
    }
    return (
      <MonthDropdown
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        onChange={this.changeMonth}
        month={this.state.date.month()} />
    )
  }

  renderTodayButton = () => {
    if (!this.props.todayButton) {
      return
    }
    return (
      <div className={styles.todayButtonContainer}>
        <Button size={'medium'} classType={'transparent'} onClick={e => this.props.onSelect(moment.utc().utcOffset(this.props.utcOffset).startOf('date'), e)}>
          {this.props.todayButton}
        </Button>
      </div>
    )
  }

  renderMonths = () => {
    var monthList = []
    for (var i = 0; i < this.props.monthsShown; ++i) {
      var monthDate = this.state.date.clone().add(i, 'M')
      var monthKey = `month-${i}`
      monthList.push(
        <div key={monthKey} className={styles.monthContainer}>
          <div className={styles.header}>
            <div
              className={styles.navigationBar}
              onFocus={this.handleDropdownFocus}>
              {this.renderPreviousMonthButton()}
              <div className={styles.monthAndYear}>
                {this.renderMonthDropdown(i !== 0)}
                {this.renderYearDropdown(i !== 0)}
              </div>
              {this.renderNextMonthButton()}
            </div>
            <Divider position='horizontal' className={styles.divider} />
            <div className={styles.dayNames}>
              {this.header(monthDate)}
            </div>
            <Divider position='horizontal' className={styles.divider} />
          </div>
          <Month
            day={monthDate}
            dayClassName={this.props.dayClassName}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
            onMouseLeave={this.handleMonthMouseLeave}
            onWeekSelect={this.props.onWeekSelect}
            formatWeekNumber={this.props.formatWeekNumber}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            excludeDates={this.props.excludeDates}
            highlightDates={this.props.highlightDates}
            selectingDate={this.state.selectingDate}
            includeDates={this.props.includeDates}
            inline={this.props.inline}
            fixedHeight={this.props.fixedHeight}
            filterDate={this.props.filterDate}
            preSelection={this.props.preSelection}
            selected={this.props.selected}
            selectsStart={this.props.selectsStart}
            selectsEnd={this.props.selectsEnd}
            showWeekNumbers={this.props.showWeekNumbers}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            peekNextMonth={this.props.peekNextMonth}
            utcOffset={this.props.utcOffset} />
        </div>
      )
    }
    return monthList
  }

  render () {
    return (
      <div className={classnames('datePicker', styles.datepicker, this.props.className)}>
        {this.renderMonths()}
        <Divider position='horizontal' className={styles.divider} />
        {this.renderTodayButton()}
        {this.props.children}
      </div>
    )
  }
}
