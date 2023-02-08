import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {fireEvent, waitFor} from '@testing-library/react'

import Mocker from '@s-ui/mockmock/lib/http'

import literals from '../src/literals/es-ES.js'
import {SECOND_STEP_TEXT} from './fixtures.js'

const {LOGIN_CROSS} = literals

chai.use(chaiDOM)

const ONE_DAY = 1000 * 60 * 60 * 24

const setTokenAndExpiration = (token, exp, global) => {
  const url = new URL(global.window.location)
  url.searchParams.set('token', token)
  url.searchParams.set('exp', exp)
  global.window.history.pushState(null, '', url.toString())
}

describe('ChangePasswordForm', () => {
  const setup = setupEnvironment(LoginPasswordReset)

  const mocker = new Mocker()

  beforeEach(() => {
    mocker.create()
    const FUTURE_TIMESTAMP = new Date().getTime() + ONE_DAY
    setTokenAndExpiration('1234', FUTURE_TIMESTAMP, global)
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should render the stepper on the second stage', () => {
    // Given
    const props = {}

    // When
    const {getByText} = setup(props)

    // Then
    getByText(SECOND_STEP_TEXT)
  })

  it('should display an error if the token has expired', async () => {
    setTokenAndExpiration('1234', 0, global)

    // Given
    const props = {}

    // When
    const {findByText} = setup(props)

    // Then
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.EXPIRED_TOKEN)
  })

  it('should disable the submit button by default', async () => {
    // Given
    const props = {}

    // When
    const {getByRole} = setup(props)
    const submitButton = getByRole('button', {
      name: LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON
    })

    // Then
    expect(submitButton).to.have.attr('disabled')
  })

  it('should show an error if password length is less than 8 characters', async () => {
    // Given
    const props = {}

    // When
    const {getByLabelText, findByText} = setup(props)
    const passwordInput = getByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL
    )

    // Then
    fireEvent.change(passwordInput, {target: {value: '1'}})
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.INVALID_INPUT)
  })
  it('should sow an error if password is empty', async () => {
    // Given
    const props = {}

    // When
    const {getByLabelText, findByText} = setup(props)
    const passwordInput = getByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL
    )

    // Then
    fireEvent.change(passwordInput, {target: {value: '1'}})
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.INVALID_INPUT)
    fireEvent.change(passwordInput, {target: {value: ''}})
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.EMPTY_PASSWORD)
  })
  it('should show an error if passwords do not match', async () => {
    // Given
    const props = {}

    // When
    const {getByLabelText, findByText} = setup(props)
    const passwordInput = getByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL
    )

    // Then
    fireEvent.change(passwordInput, {target: {value: '1'}})
    await findByText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.PASSWORDS_NOT_MATCH
    )
  })
  it('should enable submit button when passwords are valid and match', async () => {
    // Given
    const props = {}

    // When
    const {getByRole, findByLabelText} = setup(props)

    const repeatPasswordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL
    )
    fireEvent.change(repeatPasswordInput, {target: {value: '12345678'}})

    const passwordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL
    )
    fireEvent.change(passwordInput, {target: {value: '12345678'}})

    // Then
    const submitButton = getByRole('button', {
      name: LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON
    })

    await waitFor(() => {
      expect(submitButton.disabled).to.be.false
    })
  })
  it('should successfully complete the password change if passwords are valid and endpoint responds successfully', async () => {
    // Given
    const props = {
      endpoints: {
        changePassword: 'http://fake/change-password'
      }
    }

    mocker
      .httpMock('http://fake/')
      .post('change-password', {token: '1234', password: '12345678'})
      .reply(null, 202)

    // When
    const {getByRole, findByLabelText, findByText} = setup(props)

    const repeatPasswordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL
    )
    fireEvent.change(repeatPasswordInput, {target: {value: '12345678'}})

    const passwordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL
    )
    fireEvent.change(passwordInput, {target: {value: '12345678'}})

    const submitButton = getByRole('button', {
      name: LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON
    })

    await waitFor(() => {
      expect(submitButton.disabled).to.be.false
    })

    // Then
    fireEvent.click(submitButton)
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUCCESS.PASSWORD_CHANGED)
  })
  it('should show an error if passwords are valid but endpoint responds with an error', async () => {
    // Given
    const props = {
      endpoints: {
        changePassword: 'http://fake/change-password'
      }
    }

    mocker
      .httpMock('http://fake/')
      .post('change-password', {token: '1234', password: '12345678'})
      .reply(null, 400)

    // When
    const {getByRole, findByLabelText, findByText} = setup(props)

    const repeatPasswordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL
    )
    fireEvent.change(repeatPasswordInput, {target: {value: '12345678'}})

    const passwordInput = await findByLabelText(
      LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL
    )
    fireEvent.change(passwordInput, {target: {value: '12345678'}})

    const submitButton = getByRole('button', {
      name: LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON
    })

    await waitFor(() => {
      expect(submitButton.disabled).to.be.false
    })

    // Then
    fireEvent.click(submitButton)
    await findByText(LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.SERVER_ERROR)
  })
})
