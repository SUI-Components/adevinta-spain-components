import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {fireEvent} from '@testing-library/react'

import Mocker from '@s-ui/mockmock/lib/http'

import literals from '../src/literals/es-ES.js'
import {FIRST_STEP_TEXT, VALID_EMAIL} from './fixtures.js'

const {LOGIN_CROSS} = literals

chai.use(chaiDOM)

describe('ResetPasswordForm', () => {
  const setup = setupEnvironment(LoginPasswordReset)

  const mocker = new Mocker()

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should render the stepper on the first stage', () => {
    // Given
    const props = {}

    // When
    const {getByText} = setup(props)

    // Then
    getByText(FIRST_STEP_TEXT)
  })

  it('should display an error if the submit button is pressed, without writing an e-mail', async () => {
    // Given
    const props = {}

    // When
    const {getByText, findByText} = setup(props)
    const submitButton = getByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON
    )

    // Then
    submitButton.click()
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_1.ERRORS.EMPTY_EMAIL)
  })

  it('should display an error if the submit button is pressed, with an invalid e-mail', async () => {
    // Given
    const props = {}

    // When
    const {getByText, findByText, getByLabelText} = setup(props)
    const submitButton = getByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON
    )
    const emailInput = getByLabelText('Email')

    // Then
    fireEvent.change(emailInput, {target: {value: 'invalid-email'}})
    submitButton.click()
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_1.ERRORS.INVALID_EMAIL)
  })

  it('should display a success message if the submit button is pressed, with a valid e-mail', async () => {
    // Given
    const props = {
      endpoints: {
        resetPassword: 'http://fake/reset-password'
      }
    }

    // When
    const {getByText, findByText, getByLabelText} = setup(props)
    const submitButton = getByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON
    )
    const emailInput = getByLabelText('Email')

    mocker
      .httpMock('http://fake/')
      .post('reset-password', {email: VALID_EMAIL})
      .reply(null, 202)

    // Then

    const SUCCESS_MESSAGE =
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUCCESS.EMAIL_SENDED.replace(
        '%{email}',
        VALID_EMAIL
      )

    fireEvent.change(emailInput, {target: {value: VALID_EMAIL}})
    submitButton.click()
    await findByText(SUCCESS_MESSAGE)
  })

  it('should display an error message if the submit button is pressed but the endpoint returns an error', async () => {
    // Given
    const props = {
      endpoints: {
        resetPassword: 'http://fake/reset-password'
      }
    }

    // When
    const {getByText, findByText, getByLabelText} = setup(props)
    const submitButton = getByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON
    )
    const emailInput = getByLabelText('Email')

    mocker
      .httpMock('http://fake/')
      .post('reset-password', {email: VALID_EMAIL})
      .reply(null, 400)

    // Then
    fireEvent.change(emailInput, {target: {value: VALID_EMAIL}})
    submitButton.click()
    await findByText(LOGIN_CROSS.PASSWORD_RESET.ERRORS.GENERIC_ERROR)
  })

  it('should display a success message if the submit button is pressed with a valid e-mail and then a re-send is requested', async () => {
    // Given
    const props = {
      endpoints: {
        resetPassword: 'http://fake/reset-password'
      }
    }

    mocker
      .httpMock('http://fake/')
      .post('reset-password', {email: VALID_EMAIL})
      .reply(null, 202)

    // When
    const {getByText, findByText, getByLabelText} = setup(props)
    const submitButton = getByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON
    )
    const emailInput = getByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.EMAIL_LABEL
    )

    fireEvent.change(emailInput, {target: {value: VALID_EMAIL}})
    submitButton.click()

    const resendLink = await findByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_1.RESEND_LINK
    )
    resendLink.click()

    // Then
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUCCESS.EMAIL_RESEND)
  })
})
