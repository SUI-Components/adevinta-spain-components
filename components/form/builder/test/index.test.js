/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import userEvent from '@testing-library/user-event'

import BasicFormSection from '../demo/BasicFormSection.js'
import {
  FORM_BUILDER_SELECT_FIELD_MOCK,
  FORM_BUILDER_SELECT_FIELD_WITH_DISABLED_MOCK
} from '../mocks/index.js'
import FormBuilder from '../src/index.js'
import {checkConstraintsFactory} from '../src/Standard/index.js'

chai.use(chaiDOM)

describe('form/builder', () => {
  const WrappedFormComponent = props => <BasicFormSection {...props} />

  const setup = setupEnvironment(FormBuilder)
  const setupForm = setupEnvironment(WrappedFormComponent)

  it('should render without crashing', () => {
    // Given
    const props = {
      json: FORM_BUILDER_SELECT_FIELD_MOCK
    }

    // When
    const Component = <FormBuilder {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(Component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should not render null', () => {
    // Given
    const props = {
      json: FORM_BUILDER_SELECT_FIELD_MOCK
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should display error validation message when field is required', async () => {
    const props = {
      json: FORM_BUILDER_SELECT_FIELD_MOCK,
      errors: checkConstraintsFactory(
        FORM_BUILDER_SELECT_FIELD_MOCK,
        'es-ES'
      )({all: true})
    }

    const {queryAllByText, getByText} = setupForm(props)

    const button = getByText(/Submit/)
    await userEvent.click(button)
    const requiredFields = queryAllByText('Este campo es obligatorio')

    expect(requiredFields).to.have.lengthOf(2)
  })

  it('should not display error validation message when field is disabled', async () => {
    const props = {
      json: FORM_BUILDER_SELECT_FIELD_WITH_DISABLED_MOCK,
      errors: checkConstraintsFactory(
        FORM_BUILDER_SELECT_FIELD_WITH_DISABLED_MOCK,
        'es-ES'
      )({all: true})
    }

    const {queryAllByText, getByText} = setupForm(props)

    const button = getByText(/Submit/)
    await userEvent.click(button)
    const requiredFields = queryAllByText('Este campo es obligatorio')

    expect(requiredFields).to.have.lengthOf(1)
  })
})
