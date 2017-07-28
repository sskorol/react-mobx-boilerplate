import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import Button from './Button'
import styles from './stories.scss'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Button', () => (
  <div className={styles.buttons}>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button size={'medium'} type={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button size={'medium'} type={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button size={'medium'} type={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button size={'medium'} type={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button size={'medium'} type={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button disabled size={'medium'} type={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button disabled size={'medium'} type={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button disabled size={'medium'} type={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button disabled size={'medium'} type={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button disabled size={'medium'} type={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button size={'small'} type={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button size={'small'} type={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button size={'small'} type={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button size={'small'} type={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button size={'small'} type={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button disabled size={'small'} type={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button disabled size={'small'} type={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button disabled size={'small'} type={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button disabled size={'small'} type={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button disabled size={'small'} type={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
  </div>
))
