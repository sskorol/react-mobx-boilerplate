import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../../Icon/Icon'
import styles from './DateInput.scss'

export default class DateInput extends React.PureComponent {
  static propTypes = {
    setInputRef: PropTypes.func,
    onIconClick: PropTypes.func,
    iconSize: PropTypes.string,
    icon: PropTypes.string
  }

  render () {
    const {setInputRef, iconSize, icon, onIconClick, ...restProps} = this.props
    return (
      <div className={classnames('pickerInputContainer', styles.pickerInputContainer)}>
        <input type='text' ref={setInputRef} {...restProps} className={classnames('datePickerInput', styles.datePickerInput)} />
        <div className={classnames('iconContainer', styles.iconContainer)} onClick={onIconClick}>
          <Icon size={iconSize} subSize={'icon-m'} icon={icon} />
        </div>
      </div>
    )
  }
}
