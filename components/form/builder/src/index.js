import {useState, useEffect, useCallback, useRef} from 'react'
import PropTypes from 'prop-types'

import {json} from './prop-types'
import {reducer} from './reducer'
import {RULES} from './reducer/constants'
import {
  pickFieldById,
  fieldsToObject,
  fieldsToObjectNativeTypes,
  fieldsNamesInOrderOfDefinition,
  changeFieldById
} from './reducer/fields'

import ProxyField from './ProxyField'
import {inputSizes as fieldSizes} from '@s-ui/react-atom-input'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import {getUpdatedFormState} from './mapper/formState'

const FormBuilder = ({
  allowInitFieldsReload = false,
  forceRulesOnAllFields,
  json,
  initFields = {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  responseInterceptor = ({response}) => response,
  requestInterceptor = () => {},
  loader,
  fieldSize,
  errors = {},
  alerts = {},
  transformations = (_, value) => value,
  baseAPIURL = 'https://ptaformbuilder-classifiedads.spain.advgo.net',
  locale = 'es-ES',
  useNativeFieldType = false,
  children: renderer = () => ({})
}) => {
  const {fields = [], rules = {}, id: formID} = json.form
  const [stateFields, setStateFields] = useState(fields)
  const [stateShowSpinner, setStateShowSpinner] = useState(false)
  const __PERFORMANCE_UGLY_HACK_STATE_FIELDS__ = useRef()
  __PERFORMANCE_UGLY_HACK_STATE_FIELDS__.current = stateFields

  const changeField = (fieldId, fieldValue) => {
    const nextFields = changeFieldById(
      __PERFORMANCE_UGLY_HACK_STATE_FIELDS__.current,
      fieldId,
      {value: fieldValue}
    )
    setStateFields(nextFields)

    return nextFields
  }

  const handlerChange = useCallback(
    async (id, value, extraParams, autocompletedField) => {
      const reducerWithRules = reducer(
        rules,
        formID,
        baseAPIURL,
        responseInterceptor,
        requestInterceptor,
        locale,
        extraParams
      )
      const timerShowSpinner = setTimeout(
        () => setStateShowSpinner(true),
        FormBuilder.USER_MINIMAL_DELAY
      )
      const transformedValue = transformations(
        id,
        value,
        pickFieldById(fields, id)
      )

      const nextFields = changeField(id, transformedValue)
      clearTimeout(timerShowSpinner)

      const nextStateFields = await reducerWithRules(nextFields, {
        type: RULES,
        id
      })

      clearTimeout(timerShowSpinner)
      setStateFields(nextStateFields)
      const nextStateFieldsObject = useNativeFieldType
        ? fieldsToObjectNativeTypes(nextStateFields)
        : fieldsToObject(nextStateFields)

      const fieldsToUpdate = await onChange({
        ...nextStateFieldsObject,
        ...(autocompletedField && {
          __AUTOCOMPLETED_FIELD__: autocompletedField
        }),
        __FIELD_CHANGED__: id,
        __FORM_STATE__: getUpdatedFormState(json.form, nextStateFields)
      })

      if (typeof fieldsToUpdate === 'object' && fieldsToUpdate !== null) {
        const autocompletedFields = true
        Object.entries(fieldsToUpdate).forEach(async ([key, value]) => {
          await handlerChange(key, value, undefined, autocompletedFields)
        })
      }

      setStateShowSpinner(false)
  }, []) // eslint-disable-line

  useEffect(() => {
    const reducerWithRules = reducer(
      rules,
      formID,
      baseAPIURL,
      responseInterceptor,
      requestInterceptor,
      locale
    )
    const timerShowSpinner = setTimeout(
      () => setStateShowSpinner(true),
      FormBuilder.USER_MINIMAL_DELAY
    )
    fieldsNamesInOrderOfDefinition(fields)
      .reduce(async (previousPromise, fieldId) => {
        const previousFields = await previousPromise
        if (
          !forceRulesOnAllFields &&
          (!initFields[fieldId] || initFields[fieldId] === '')
        ) {
          return previousFields
        }

        const nextFieldsChanged = changeField(fieldId, initFields[fieldId])

        const nextFieldsWithRules = await reducerWithRules(nextFieldsChanged, {
          type: RULES,
          id: fieldId
        })

        return nextFieldsWithRules
      }, Promise.resolve(__PERFORMANCE_UGLY_HACK_STATE_FIELDS__.current))
      .then(nextFields => {
        clearTimeout(timerShowSpinner)
        setStateFields(nextFields)
        setStateShowSpinner(false)
      })
  }, [allowInitFieldsReload ? initFields : null]) // eslint-disable-line

  return (
    <div className="sui-FormBuilder">
      {stateFields.map((field, index) => {
        const tabIndex = field.tabIndex ?? index + 1
        return (
          <ProxyField
            key={field.id}
            field={field}
            tabIndex={tabIndex}
            onChange={handlerChange}
            onBlur={onBlur}
            onFocus={onFocus}
            fieldSize={fieldSize}
            errors={errors}
            alerts={alerts}
            renderer={renderer}
          />
        )
      })}
      {stateShowSpinner && (
        <AtomSpinner type={AtomSpinnerTypes.SECTION} loader={loader} />
      )}
    </div>
  )
}

FormBuilder.USER_MINIMAL_DELAY = 250
FormBuilder.displayName = 'FormBuilder'

FormBuilder.propTypes = {
  /**
   * If it is true, formBuilder can reload its initFields via props.
   */
  allowInitFieldsReload: PropTypes.bool,
  forceRulesOnAllFields: PropTypes.bool,
  initFields: PropTypes.arrayOf(PropTypes.object),
  json,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  responseInterceptor: PropTypes.func,
  requestInterceptor: PropTypes.func,
  loader: PropTypes.object,
  fieldSize: PropTypes.oneOf(Object.values(fieldSizes)),
  errors: PropTypes.object,
  alerts: PropTypes.object,
  transformations: PropTypes.func,
  /**
   * Defines base api url to be used when a field is set as remote
   */
  baseAPIURL: PropTypes.string,
  locale: PropTypes.string,
  useNativeFieldType: PropTypes.bool,
  children: PropTypes.func
}

export {fieldSizes as formBuilderFieldSizes}
export {pickFieldById as formBuilderPickFieldById}
export {changeFieldById as formBuilderChangeFieldById}
export {fieldsNamesInOrderOfDefinition as formBuilderFieldsNamesInOrderOfDefinition}
export {checkConstraintsFactory} from './Standard'
export default FormBuilder
