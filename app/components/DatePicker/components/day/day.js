import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isSameDay, isDayDisabled, isDayInRange, getDayOfWeekCode } from '../../utils/date_utils'

import Button from '../../../Button/Button'

import styles from './day.scss'

export default class Day extends React.Component {
  static propTypes = {
    day: PropTypes.object.isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    highlightDates: PropTypes.array,
    inline: PropTypes.bool,
    month: PropTypes.number,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectingDate: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    startDate: PropTypes.object,
    utcOffset: PropTypes.number
  }

  static defaultProps = {
    utcOffset: moment.utc().utcOffset()
  }

  handleClick = (event) => {
    if (!this.isDisabled() && this.props.onClick) {
      this.props.onClick(event)
    }
  }

  handleMouseEnter = (event) => {
    if (!this.isDisabled() && this.props.onMouseEnter) {
      this.props.onMouseEnter(event)
    }
  }

  isSameDay = (other) => isSameDay(this.props.day, other)

  isKeyboardSelected = () =>
    !this.props.inline && !this.isSameDay(this.props.selected) && this.isSameDay(this.props.preSelection)

  isDisabled = () => isDayDisabled(this.props.day, this.props)

  getHighLightedClass = (defaultClassName) => {
    const { day, highlightDates } = this.props

    if (!highlightDates) {
      return {[defaultClassName]: false}
    }

    const classNames = {}
    for (let i = 0, len = highlightDates.length; i < len; i++) {
      const obj = highlightDates[i]
      if (obj instanceof moment) {
        if (isSameDay(day, obj)) {
          classNames[defaultClassName] = true
        }
      } else if (typeof obj === 'object') {
        const keys = Object.keys(obj)
        const arr = obj[keys[0]]
        if (typeof keys[0] === 'string' && arr.constructor === Array) {
          for (let k = 0, len = arr.length; k < len; k++) {
            if (isSameDay(day, arr[k])) {
              classNames[keys[0]] = true
            }
          }
        }
      }
    }

    return classNames
  }

  isInRange = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isDayInRange(day, startDate, endDate)
  }

  isInSelectingRange = () => {
    const { day, selectsStart, selectsEnd, selectingDate, startDate, endDate } = this.props

    if (!(selectsStart || selectsEnd) || !selectingDate || this.isDisabled()) {
      return false
    }

    if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
      return isDayInRange(day, selectingDate, endDate)
    }

    if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
      return isDayInRange(day, startDate, selectingDate)
    }

    return false
  }

  isSelectingRangeStart = () => {
    if (!this.isInSelectingRange()) {
      return false
    }

    const { day, selectingDate, startDate, selectsStart } = this.props

    if (selectsStart) {
      return isSameDay(day, selectingDate)
    } else {
      return isSameDay(day, startDate)
    }
  }

  isSelectingRangeEnd = () => {
    if (!this.isInSelectingRange()) {
      return false
    }

    const { day, selectingDate, endDate, selectsEnd } = this.props

    if (selectsEnd) {
      return isSameDay(day, selectingDate)
    } else {
      return isSameDay(day, endDate)
    }
  }

  isRangeStart = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isSameDay(startDate, day)
  }

  isRangeEnd = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isSameDay(endDate, day)
  }

  isWeekend = () => {
    const weekday = this.props.day.day()
    return weekday === 0 || weekday === 6
  }

  isOutsideMonth = () => {
    return this.props.month !== undefined &&
      this.props.month !== this.props.day.month()
  }

  getClassNames = (date) => {
    const dayClassName = (this.props.dayClassName ? this.props.dayClassName(date) : undefined)
    return classnames(styles.reactDatepickerDay, dayClassName, 'reactDatepickerDay--' + getDayOfWeekCode(this.props.day), {
      'reactDatepickerDay--disabled': this.isDisabled(),
      'reactDatepickerDay--selected': this.isSameDay(this.props.selected),
      'reactDatepickerDay--keyboard-selected': this.isKeyboardSelected(),
      'reactDatepickerDay--range-start': this.isRangeStart(),
      'reactDatepickerDay--range-end': this.isRangeEnd(),
      'reactDatepickerDay--in-range': this.isInRange(),
      'reactDatepickerDay--in-selecting-range': this.isInSelectingRange(),
      'reactDatepickerDay--selecting-range-start': this.isSelectingRangeStart(),
      'reactDatepickerDay--selecting-range-end': this.isSelectingRangeEnd(),
      'reactDatepickerDay--today': this.isSameDay(moment.utc().utcOffset(this.props.utcOffset)),
      'reactDatepickerDay--weekend': this.isWeekend(),
      'reactDatepickerDay--outside-month': this.isOutsideMonth()
    }, this.getHighLightedClass('reactDatepickerDay--highlighted'))
  }

  render () {
    return (
      <Button
        disabled={this.isDisabled()}
        isSquare
        size={'medium'}
        className={this.getClassNames(this.props.day)}
        classType={'transparent'}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        aria-label={`day-${this.props.day.date()}`}
        role='option'>
        {this.props.day.date()}
      </Button>
    )
  }
}
