import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './week_number.scss'

export default class WeekNumber extends React.Component {
  static propTypes = {
    weekNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render () {
    const weekNumberClasses = {
      [styles.weekNumber]: true,
      [styles.clickable]: !!this.props.onClick
    }
    return (
      <div
        className={classnames(weekNumberClasses)}
        aria-label={`week-${this.props.weekNumber}`}
        onClick={this.handleClick}>
        {this.props.weekNumber}
      </div>
    )
  }
}
