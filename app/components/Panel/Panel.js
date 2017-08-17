import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Panel.scss'

export default class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props

    return (
      <div className={classnames('panel', styles.panel)}>
        {children}
      </div>
    )
  }
}
