import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Datepicker from './Datepicker'
import moment from 'moment'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('Datepicker', () => (
  <div className={styles.buttons}>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Datepicker'}>
        <Datepicker
          excludeDates={[moment().add(16, 'days')]}
          selected={moment().add(30, 'days')}
          startDate={moment().subtract(6, 'days')}
          endDate={moment().subtract(1, 'days')}
          onChange={() => console.log('aaa')}
          todayButton={'Today'}
          scrollableYearDropdown
          showMonthDropdown
          showYearDropdown />
      </WithNotes>
    </div>
  </div>
))

// highlightDates={[moment().add(14, 'days'), moment().add(7, 'days')]}
