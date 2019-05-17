import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Select from './components/select'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import TextArea from './components/text-area'
import AtomButtom from '@schibstedspain/sui-atom-button'

const INITIAL_LIST_ITEM_STATE = []
const INITIAL_INPUT_ITEM_STATE = ''

const BASE_CLASS = 'sui-FormBuilder'
const FORM_WRAP_CLASS = `${BASE_CLASS}-wrap`
const FORM_ITEM_CLASS = `${BASE_CLASS}-item`
const FORM_ITEM_DISABLED_CLASS = `is-disabled`

class FormBuilder extends Component {
  constructor({config, submitText}) {
    super()
    this._config = config
    this._formFields = Object.keys(this._config)
    this._initialState = this._getDefaultInitialState(this._formFields)
    this._submitText = submitText

    this.state = {...this._initialState, showErrors: false}
  }

  /* Requested the list of vehicle brands by default at the start of the PTA */
  componentDidMount = async () => {
    const items = await this.props.onLoad()
    const initialState = this._getDefaultInitialState(this._formFields)
    this.setState({...initialState, ...items})
  }

  /* Get initial form state */
  _getDefaultInitialState = fields =>
    fields.reduce((state, key) => {
      state[key] = INITIAL_LIST_ITEM_STATE
      return state
    }, {})

  _getFormValues = (fields, currentField, currentValuedId) =>
    fields.reduce((state, field) => {
      const selectedFieldId = this._getSelectedFieldId(this.state[field])
      state[field] = currentField === field ? currentValuedId : selectedFieldId
      return state
    }, {})

  /* Must implement the method of calling the UseCase, passing the field name and the parameters to it */
  _getFieldItems = async (field, currentField, currentValueId) => {
    const params = this._getSelectedFormValues(
      field,
      currentField,
      currentValueId
    )
    const items = await this.props.onChange({field, params})
    return items
  }

  /* From a field name, returns the previous values to that field of the form, to make the request to UseCase through the generated parameters. */
  _getSelectedFormValues = (nextField, currentField, currentValuedId) => {
    const maxIndex = this._formFields.indexOf(nextField)
    const selectedFields = this._formFields.filter(
      (_, index) => index < maxIndex
    )
    const selectedFormValues = this._getFormValues(
      selectedFields,
      currentField,
      currentValuedId
    )
    return selectedFormValues
  }

  /* Function responsible to clear the data from the fields subsequent to the current selection, except if isPersistent */
  _clearForwardFields = field => {
    const maxIndex = this._formFields.indexOf(field)
    const fieldsToClear = this._formFields.filter(
      (field, index) => index > maxIndex && !this._config[field].persists
    )
    const clearedFields = this._getDefaultInitialState(fieldsToClear)
    return clearedFields
  }

  /* Get the selected field name from a list */
  _getSelectedFieldName = list => {
    const selectedItem = list.find(({selected}) => selected)
    return selectedItem && selectedItem.name
  }

  /* Get the selected field */
  _getSelectedFieldId = field => {
    const isArray = Array.isArray(field)
    const selectedItem = isArray && field.find(({selected}) => selected)
    return selectedItem && selectedItem.id
  }

  /* Set the selected field and returns the modified object */
  _setSelectedField = (field, value) =>
    this.state[field].map(field => {
      return {
        ...field,
        selected: field.name === value
      }
    })

  /* Function that manages the onChange method, setting the Value and List states, and clear the data from the fields subsequent to the current selection */
  /* Prevents the setState method from running when the user selects the same item that was previously selected */
  /* Get ID from item name */
  _handleChange = async (field, value) => {
    const selectedFormField = this._setSelectedField(field, value)
    const selectedFieldItemId = this._getSelectedFieldId(selectedFormField)
    const nextField = this._config[field].next
    const items =
      nextField &&
      (await this._getFieldItems(nextField, field, selectedFieldItemId))
    const clearedForwardFields = this._clearForwardFields(field)

    this.setState({
      ...clearedForwardFields,
      [field]: selectedFormField,
      ...items
    })
  }

  /* Function that manages the onChange method form input and text-areas, setting the value */
  _handleInputChange = (field, value) => {
    const inputValue = {[field]: value}
    this.setState({...inputValue})
  }

  /* Function responsible for rendering the Select component, generating the data according to the received field name */
  _renderSelect = ({errorText, field, label, id, disabled, placeholder}) => {
    const {showError} = this.state
    const value = this.state[field]
    return (
      <Select
        errorText={showError && errorText}
        disabled={disabled}
        key={field}
        label={label}
        id={id}
        value={this._getSelectedFieldName(this.state[field])}
        items={value}
        placeholder={placeholder}
        onChange={name => this._handleChange(field, name)}
      />
    )
  }

  /* Function responsible for rendering the ButtonGroup component, generating the data according to the received field name */
  _renderButtonGroup = ({errorText, field, label, id, disabled}) => {
    const {showError} = this.state
    return (
      <ButtonGroup
        errorText={showError && errorText}
        disabled={disabled}
        key={field}
        label={label}
        id={id}
        value={this._getSelectedFieldName(this.state[field])}
        items={this.state[field]}
        onChange={name => this._handleChange(field, name)}
      />
    )
  }

  /* Function responsible for rendering the Input component, generating the data according to the received field name */
  _renderInput = ({errorText, field, label, id, placeholder, inputType}) => {
    const {showError} = this.state
    const value = this.state[field]
    return (
      <Input
        errorText={showError && errorText}
        key={field}
        label={label}
        id={id}
        value={value.length ? value : INITIAL_INPUT_ITEM_STATE}
        type={inputType}
        placeholder={placeholder}
        onChange={value => this._handleInputChange(field, value)}
      />
    )
  }

  /* Function responsible for rendering the TextArea component, generating the data according to the received field name */
  _renderTextArea = ({errorText, field, label, id, size, placeholder}) => {
    const {showError} = this.state
    const value = this.state[field]
    return (
      <TextArea
        errorText={showError && errorText}
        key={field}
        label={label}
        id={id}
        value={value.length ? value : INITIAL_INPUT_ITEM_STATE}
        size={size}
        placeholder={placeholder}
        onChange={value => this._handleInputChange(field, value)}
      />
    )
  }

  /* Renders the component corresponding to the received field name */
  _renderFormFieldItem = ({props}) => {
    const {type} = props
    switch (type) {
      case 'select':
        return this._renderSelect(props)
      case 'button-group':
        return this._renderButtonGroup(props)
      case 'input':
        return this._renderInput(props)
      case 'text-area':
        return this._renderTextArea(props)
    }
  }

  /* Renders the form-field corresponding to the received field name */
  _renderFormField = (field, index) => {
    const capitalizedKey = `${field[0].toUpperCase()}${field.slice(1)}` // SUI-JS ??
    const disabled = !this.state[field].length
    const id = `${BASE_CLASS}-${field}`
    const props = {field, id, disabled, ...this._config[field]}
    const fieldClass = cx(
      `${FORM_ITEM_CLASS} ${FORM_ITEM_CLASS}${capitalizedKey}`,
      {
        [FORM_ITEM_DISABLED_CLASS]: disabled
      }
    )
    return (
      <div key={index} className={fieldClass}>
        {this._renderFormFieldItem({props})}
      </div>
    )
  }

  /* Execute the form submit */
  _handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  /* Render method that maps config KEYS and generates form fields dynamically depending on the config, a specific type of form field (select, button group, text-area, etc.) */
  render() {
    return (
      <div className={BASE_CLASS}>
        <form className={FORM_WRAP_CLASS} onSubmit={this._handleSubmit}>
          {this._formFields.map((field, index) =>
            this._renderFormField(field, index)
          )}
          <AtomButtom isSubmit>{this._submitText}</AtomButtom>
        </form>
      </div>
    )
  }
}

FormBuilder.displayName = 'FormBuilder'

FormBuilder.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.string.isRequired,
    next: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    errorText: PropTypes.string,
    persists: PropTypes.bool,
    inputType: PropTypes.string,
    size: PropTypes.string
  }),
  onLoad: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired
}

export default FormBuilder
