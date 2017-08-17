import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Checkbox from './Checkbox'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('Checkboxes', () => (
  <div className={styles.buttons}>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox1'} size={'medium'} name='checkbox1' value='value1' onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox2'} size={'medium'} name='checkbox2' value='value2' onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox3'} size={'medium'} name='checkbox3' value='value3' onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox4'} size={'small'} name='checkbox4' value='value4' onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox5'} size={'small'} name='checkbox5' value='value5' onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Checkbox'}>
        <Checkbox id={'checkbox6'} size={'small'} name='checkbox6' value='value6' onClick={action('clicked')} />
      </WithNotes>
    </div>
  </div>
))
