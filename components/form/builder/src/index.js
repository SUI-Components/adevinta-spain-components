import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Select from './components/select'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import TextArea from './components/text-area'
import AtomButtom from '@schibstedspain/sui-atom-button'

import {toCapitalCase} from '@s-ui/js/lib/string'

const INITIAL_LIST_ITEM_STATE = undefined
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
    this._submitText = submitText
    this.state = {
      showErrors: false
    }
  }

  /**
   * Requests the listing of the inital field values
   */
  componentDidMount = async () => {
    const items = await this.props.onLoad()
    this.setState({...items})
  }

  /**
   * Get initial form state.
   * @param {Array} fields
   */
  _getDefaultInitialState = fields =>
    fields.reduce((state, key) => {
      if (this.state.hasOwnProperty(key)) state[key] = INITIAL_LIST_ITEM_STATE
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
    const selectedItem = list && list.find(({selected}) => selected)
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
  _renderSelect = ({
    errors,
    showErrors,
    field,
    label,
    id,
    disabled,
    placeholder
  }) => {
    const items = this.state[field]
    const value = this._getSelectedFieldName(items)
    return (
      <Select
        errors={errors}
        showErrors={showErrors}
        disabled={disabled}
        key={field}
        label={label}
        id={id}
        value={value}
        items={items}
        placeholder={placeholder}
        onChange={name => this._handleChange(field, name)}
      />
    )
  }

  /**
   * Function responsible for rendering the ButtonGroup component, generating the data according to the received field name
   * @param {Object} props
   */
  _renderButtonGroup = ({errors, showErrors, field, label, id, disabled}) => {
    const items = this.state[field]
    const value = this._getSelectedFieldName(items)
    return (
      items && (
        <ButtonGroup
          errors={errors}
          showErrors={showErrors}
          disabled={disabled}
          key={field}
          label={label}
          id={id}
          value={value}
          items={items}
          onChange={name => this._handleChange(field, name)}
        />
      )
    )
  }

  /**
   * Function responsible for rendering the Input component, generating the data according to the received field name
   * @param {Object} props
   */
  _renderInput = ({
    errors,
    showErrors,
    field,
    label,
    id,
    placeholder,
    inputType
  }) => {
    const value = this.state[field] || INITIAL_INPUT_ITEM_STATE
    return (
      <Input
        errors={errors}
        showErrors={showErrors}
        key={field}
        label={label}
        id={id}
        value={value}
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
  _renderTextArea = ({
    errors,
    showErrors,
    field,
    label,
    id,
    size,
    placeholder
  }) => {
    const value = this.state[field] || INITIAL_INPUT_ITEM_STATE
    return (
      <TextArea
        errors={errors}
        showErrors={showErrors}
        key={field}
        label={label}
        id={id}
        value={value}
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
    const capitalizedKey = toCapitalCase(field)
    const disabled = !this.state[field]
    const {showErrors} = this.state
    const id = `${BASE_CLASS}-${field}`
    const props = {
      field,
      id,
      disabled,
      showErrors,
      BASE_CLASS,
      ...this._config[field]
    }
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
    this.setState({showErrors: true})
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
    /** Refers to the formfield errors */
    errors: PropTypes.Object,
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
