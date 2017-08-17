import React from 'react'

import { storiesOf } from '@storybook/react'
import moment from 'moment'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Input from '../Input/Input'
import LabeledComponent from './LabeledComponent'
import Datepicker from '../DatePicker/Datepicker'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('LabeledComponent', () => (
  <div className={styles.textFields}>
    <div className={styles.textFieldRow}>
      <WithNotes notes={'LabeledComponent'}>
        <LabeledComponent size='medium' labelFor='id2' labelText='Last Name'>
          <Input id='id2' size='medium' type='text' value='' placeholderText='Appleseed' onChange={() => console.log('a')} />
        </LabeledComponent>
      </WithNotes>
    </div>
    <div className={styles.textFieldRow}>
      <WithNotes notes={'LabeledComponent'}>
        <LabeledComponent size='medium' labelFor='id303' labelText='Date of Birth'>
          <Datepicker selected={moment()}
            onChange={() => console.log('a')}
            todayButton={'Today'}
            scrollableYearDropdown
            showMonthDropdown
            showYearDropdown
            id='id303' />
        </LabeledComponent>
      </WithNotes>
    </div>
  </div>
))
