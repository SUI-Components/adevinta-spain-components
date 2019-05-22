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

  /**
   * Requests the initial status of the form and the listing of the first field
   */
  componentDidMount = async () => {
    const items = await this.props.onLoad()
    const initialState = this._getDefaultInitialState(this._formFields)
    this.setState({...initialState, ...items})
  }

  /**
   * Get initial form state.
   * @param {Array} fields
   */
  _getDefaultInitialState = fields =>
    fields.reduce((state, key) => {
      state[key] = INITIAL_LIST_ITEM_STATE
      return state
    }, {})

  /**
   * Get the form values.
   * @param {Array} fields
   * @param {Object} currentField
   * @param {string} fields
   */
  _getFormValues = (fields, currentField, currentValuedId) =>
    fields.reduce((state, field) => {
      const selectedFieldId = this._getSelectedFieldId(this.state[field])
      state[field] = currentField === field ? currentValuedId : selectedFieldId
      return state
    }, {})

  /**
   * Executes the *props.onChange* function that is passed via props, to request a list based on the fieldname and current parameters
   * @param {string} nextField
   * @param {Object} currentField
   * @param {string} currentValueId
   */
  _getFieldItems = async (nextField, currentField, currentValueId) => {
    const params = this._getSelectedFormValues(
      nextField,
      currentField,
      currentValueId
    )
    const items = await this.props.onChange({nextField, params})
    return items
  }

  /**
   * From a field name, returns the previous values to that field of the form, to make the request to *props.onChange* through the generated parameters
   * @param {string} nextField
   * @param {Object} currentField
   * @param {string} currentValueId
   */
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

  /**
   * Function responsible to clear the data from the fields subsequent to the current selection, except if isPersistent
   * @param {string} field
   */
  _clearForwardFields = field => {
    const maxIndex = this._formFields.indexOf(field)
    const fieldsToClear = this._formFields.filter(
      (field, index) => index > maxIndex && !this._config[field].persists
    )
    const clearedFields = this._getDefaultInitialState(fieldsToClear)
    return clearedFields
  }

  /**
   * Get the selected field name from a list
   * @param {Array} list
   */
  _getSelectedFieldName = list => {
    const selectedItem = list.find(({selected}) => selected)
    return selectedItem && selectedItem.name
  }

  /**
   * Get the selected field id
   * @param {Array | string} field
   */
  _getSelectedFieldId = field => {
    const isArray = Array.isArray(field)
    const selectedItem = isArray && field.find(({selected}) => selected)
    return selectedItem && selectedItem.id
  }

  /**
   * Set the selected field and returns the modified object
   * @param {string} field
   * @param {Object} string
   */
  _getNewStateWithSelectedField = (field, value) =>
    this.state[field].map(field => {
      return {
        ...field,
        selected: field.name === value
      }
    })

  /**
   * Function that manages the onChange method, setting the Value and List states, and clear the data from the fields subsequent to the current selection
   * Prevents the setState method from running when the user selects the same item that was previously selected
   * @param {string} field
   * @param {string} value
   */
  _handleChange = async (field, value) => {
    const selectedFormField = this._getNewStateWithSelectedField(field, value)
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

  /**
   * Function that manages the onChange method form input and text-areas, setting the value
   * @param {string} field
   * @param {string} value
   */
  _handleInputChange = (field, value) => {
    const inputValue = {[field]: value}
    this.setState({...inputValue})
  }

  /**
   * Function responsible for rendering the Select component, generating the data according to the received field name
   * @param {Object} props
   */
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

  /**
   * Function responsible for rendering the ButtonGroup component, generating the data according to the received field name
   * @param {Object} props
   */
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

  /**
   * Function responsible for rendering the Input component, generating the data according to the received field name
   * @param {Object} props
   */
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

  /**
   * Function responsible for rendering the TextArea component, generating the data according to the received field
   * @param {Object} props
   */
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

  /**
   * Renders the component corresponding to the received field name
   * @param {Object} props
   */
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

  /**
   * Renders the form field corresponding to the received field name
   * @param {string} field
   * @param {number} index
   */
  _renderFormField = (field, index) => {
    const capitalizedKey = `${field[0].toUpperCase()}${field.slice(1)}` // SUI-JS ??
    const disabled = !this.state[field].length
    const id = `${BASE_CLASS}-${field}`
    const props = {field, id, disabled, ...this._config[field], BASE_CLASS}
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

  /**
   * Execute the form submit
   * @param {Event} e
   */
  _handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  /**
   * Render method that maps config KEYS and generates form fields dynamically depending on the config, a specific type of form field (select, button group, text-area, etc.)
   */
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
  /** Config with the form specifications */
  config: PropTypes.shape({
    /** Refers to the formfield Type */
    type: PropTypes.string.isRequired,
    /** Refers to the following field that the formbuilder must request */
    next: PropTypes.string,
    /** Refers to the formfield placeholder */
    placeholder: PropTypes.string,
    /** Refers to the formfield label */
    label: PropTypes.string,
    /** Refers to the formfield errorText */
    errorText: PropTypes.string,
    /** Refers to whether formField is persistent */
    persists: PropTypes.bool,
    /** Refers to the formfield input type */
    inputType: PropTypes.string,
    /** Refers to the formfield size */
    size: PropTypes.string
  }),
  /** Function executed on component load. May be used to intialize form data */
  onLoad: PropTypes.func.isRequired,
  /** Function executed on field change. May be used to initialize next field data */
  onChange: PropTypes.func.isRequired,
  /** Function that sends the form data */
  onSubmit: PropTypes.func.isRequired,
  /** Submit button text */
  submitText: PropTypes.string.isRequired
}

export default FormBuilder
