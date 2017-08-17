import React from 'react'

import { storiesOf } from '@storybook/react'
import moment from 'moment'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { WithNotes } from '@storybook/addon-notes'
import backgrounds from 'react-storybook-addon-backgrounds'
import Button from './Button'
import Divider from '../Divider/Divider'
import Datepicker from '../DatePicker/Datepicker'
import styles from './stories.scss'

import '../../styles/general.global.scss'

const stories = storiesOf('UI Kit', module)

stories.addDecorator(withKnobs)
stories.addDecorator(backgrounds([
    { name: 'Light', value: '#fff' },
    { name: 'Light 2', value: '#f2f5f7' },
    { name: 'Dark', value: '#3e4c59' }
]))

stories.add('Buttons', () => (
  <div className={styles.buttons}>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button size={'medium'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <Divider position={'vertical'} />
      <WithNotes notes={'Button secondary'}>
        <Button size={'medium'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button size={'medium'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Datepicker'}>
        <Datepicker selected={moment()}
          onChange={() => console.log('aaa')}
          showMonthDropdown
          showYearDropdown />
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button size={'medium'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button size={'medium'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button size={'medium'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <Divider position={'horizontal'} />
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button counterValue={42} size={'medium'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button counterValue={42} size={'medium'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button counterValue={42} size={'medium'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button counterValue={42} size={'medium'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button counterValue={42} size={'medium'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button counterValue={42} size={'medium'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'box'} size={'medium'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'chevronsDown'} size={'medium'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} size={'medium'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} size={'medium'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} size={'medium'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} size={'medium'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'chevronsDown'} counterValue={42} size={'medium'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'chevronsDown'} counterValue={42} size={'medium'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'box'} counterValue={42} size={'medium'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'box'} counterValue={42} size={'medium'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'primary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'secondary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'success'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'box'} counterValue={42} size={'medium'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'transparent'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} counterValue={42} size={'medium'} classType={'ghost'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'chevronsDown'} size={'medium'} classType={'primary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} size={'medium'} classType={'secondary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} size={'medium'} classType={'success'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} size={'medium'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} size={'medium'} classType={'transparent'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} size={'medium'} classType={'ghost'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button disabled size={'medium'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button disabled size={'medium'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button disabled size={'medium'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button disabled size={'medium'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button disabled size={'medium'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button disabled size={'medium'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button size={'small'} classType={'primary'} onClick={action('clicked')}>Beagle</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button size={'small'} classType={'secondary'} onClick={action('clicked')}>Google</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button size={'small'} classType={'success'} onClick={action('clicked')}>ББББББББ</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button size={'small'} classType={'danger'} onClick={action('clicked')}>YYYYYYYYYY</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button size={'small'} classType={'transparent'} onClick={action('clicked')}>lllllllllll</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button size={'small'} classType={'ghost'} onClick={action('clicked')}>lllllllllll</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button counterValue={42} size={'small'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button counterValue={42} size={'small'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button counterValue={42} size={'small'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button counterValue={42} size={'small'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button counterValue={42} size={'small'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button counterValue={42} size={'small'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} size={'small'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} size={'small'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} size={'small'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} size={'small'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} size={'small'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} size={'small'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'primary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'secondary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'success'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'transparent'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} counterValue={42} size={'small'} classType={'ghost'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button icon={'anchor'} size={'small'} classType={'primary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button icon={'anchor'} size={'small'} classType={'secondary'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button icon={'anchor'} size={'small'} classType={'success'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button icon={'anchor'} size={'small'} classType={'danger'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button icon={'anchor'} size={'small'} classType={'transparent'} onClick={action('clicked')} />
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button icon={'anchor'} size={'small'} classType={'ghost'} onClick={action('clicked')} />
      </WithNotes>
    </div>
    <div className={styles.buttonsRow}>
      <WithNotes notes={'Button primary'}>
        <Button disabled size={'small'} classType={'primary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button secondary'}>
        <Button disabled size={'small'} classType={'secondary'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button success'}>
        <Button disabled size={'small'} classType={'success'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button danger'}>
        <Button disabled size={'small'} classType={'danger'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button transparent'}>
        <Button disabled size={'small'} classType={'transparent'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
      <WithNotes notes={'Button ghost'}>
        <Button disabled size={'small'} classType={'ghost'} onClick={action('clicked')}>Call to action</Button>
      </WithNotes>
    </div>
  </div>
))
