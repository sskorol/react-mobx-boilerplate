import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Label from './Label'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('Label', () => (
  <div className={styles.labels}>
    <div className={styles.labelsRow}>
      <WithNotes notes={'Label'}>
        <Label size='small' text='Some label' onClick={action('changed')} />
      </WithNotes>
    </div>
    <div className={styles.labelsRow}>
      <WithNotes notes={'Label'}>
        <Label size='medium' text='Some other label' onClick={action('changed')} />
      </WithNotes>
    </div>
  </div>
))
