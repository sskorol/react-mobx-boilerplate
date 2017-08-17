import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Input from './Input'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('Input', () => (
  <div className={styles.inputs}>
    <div className={styles.inputsRow}>
      <WithNotes notes={'Input primary'}>
        <Input size='small' type='text' value='vasia' placeholderText='enterText' onChange={action('changed')} />
      </WithNotes>
    </div>
    <div className={styles.inputsRow}>
      <WithNotes notes={'Input primary'}>
        <Input size='medium' type='text' value='vasia' placeholderText='enterText' onChange={action('changed')} />
      </WithNotes>
    </div>
  </div>
))
