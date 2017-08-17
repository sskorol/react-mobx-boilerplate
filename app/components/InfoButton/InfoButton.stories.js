import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import InfoButton from './InfoButton'
import styles from './stories.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('InfoButtons', () => (
  <div className={styles.buttons}>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton icon={'check'} size={'medium'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton secondary'}>
        <InfoButton icon={'check'} size={'medium'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton icon={'check'} size={'medium'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton disabled icon={'check'} size={'medium'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton secondary'}>
        <InfoButton disabled icon={'check'} size={'medium'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton disabled icon={'check'} size={'medium'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton icon={'check'} size={'small'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton secondary'}>
        <InfoButton icon={'check'} size={'small'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton icon={'check'} size={'small'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton disabled icon={'check'} size={'small'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton secondary'}>
        <InfoButton disabled icon={'check'} size={'small'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'InfoButton primary'}>
        <InfoButton disabled icon={'check'} size={'small'} classType={'default'} onClick={action('clicked')} />
      </WithNotes>
    </div>
  </div>
))
