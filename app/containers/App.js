import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import moment from 'moment'
import Panel from '../components/Panel/Panel'
import Form from '../components/Form/Form'
import FormSection from '../components/FormSection/FormSection'
import FormRow from '../components/FormRow/FormRow'
import LabeledComponent from '../components/LabeledComponent/LabeledComponent'
import Input from '../components/Input/Input'
import Datepicker from '../components/DatePicker/Datepicker'
import Button from '../components/Button/Button'
// import InfoButton from '../components/InfoButton/InfoButton'
import Divider from '../components/Divider/Divider'
import classnames from 'classnames'
import styles from './App.scss'

import '../styles/general.global.scss'

@observer
class App extends React.Component {
  @observable selectedDate = moment()

  constructor () {
    super()

    this.emptyFunction = this.emptyFunction.bind(this)
  }

  @action.bound changeSelectedDate (date) {
    this.selectedDate = date
  }

  emptyFunction (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  render () {
    return (
      <div className={classnames('appContainer', styles.container)}>
        <Panel>
          <Form>
            <FormSection>
              <FormRow>
                <LabeledComponent size='medium' labelFor='id1' labelText='First Name'>
                  <Input id='id1' size='medium' type='text' value='' placeholderText='Johny' onChange={this.emptyFunction} />
                </LabeledComponent>
              </FormRow>
              <FormRow>
                <LabeledComponent size='medium' labelFor='id2' labelText='Last Name'>
                  <Input id='id2' size='medium' type='text' value='' placeholderText='Appleseed' onChange={this.emptyFunction} />
                </LabeledComponent>
              </FormRow>
              <FormRow>
                <LabeledComponent size='medium' labelFor='id303' labelText='Date of Birth'>
                  <Datepicker selected={this.selectedDate}
                    onChange={this.changeSelectedDate}
                    todayButton={'Today'}
                    scrollableYearDropdown
                    showMonthDropdown
                    showYearDropdown
                    id='id303' />
                </LabeledComponent>
              </FormRow>
            </FormSection>
            <Divider position='horizontal' />
            <FormSection>
              <FormRow>
                <Button size='medium' classType='primary' onClick={this.emptyFunction}>Send</Button>
                <Button size='medium' classType='secondary' onClick={this.emptyFunction}>Cancel</Button>
              </FormRow>
            </FormSection>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default App
