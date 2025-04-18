import {useCallback, useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import {inputSizes as fieldSizes} from '@s-ui/react-atom-input'
import AtomSpinner, {atomSpinnerTypes} from '@s-ui/react-atom-spinner'

import {getUpdatedFormState} from './mapper/formState.js'
import {RULES} from './reducer/constants.js'
import {
  changeFieldById,
  fieldsNamesInOrderOfDefinition,
  fieldsToObject,
  fieldsToObjectNativeTypes,
  pickFieldById
} from './reducer/fields.js'
import {json} from './prop-types/index.js'
import ProxyField from './ProxyField/index.js'
import {reducer} from './reducer/index.js'

const FormBuilder = ({
  allowAutoFillOnInitLoad = false,
  allowInitFieldsReload = false,
  forceRulesOnAllFields,
  json,
  initFields = {},
  onChange = () => {},
  onBlur = () => {},
  onInitFieldsLoadEnd = () => {},
  onFocus = () => {},
  responseInterceptor = ({response}) => response,
  requestInterceptor = () => {},
  showSpinnerOnInitLoad = true,
  loader,
  fieldSize,
  errors = {},
  alerts = {},
  transformations = (_, value) => value,
  baseAPIURL = 'https://ptaformbuilder-classifiedads.spain.advgo.net',
  locale = 'es-ES',
  useNativeFieldType = false,
  shouldRerenderAllFieldsOnChange = false,
  children: renderer = () => ({})
}) => {
  const {fields = [], rules = {}, id: formID} = json.form
  const [stateFields, setStateFields] = useState(fields)
  const [stateShowSpinner, setStateShowSpinner] = useState(false)

  const changeField = (fieldId, fieldValue, fields) => {
    const nextFields = changeFieldById(fields, fieldId, {value: fieldValue})
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
      const timerShowSpinner = setTimeout(() => setStateShowSpinner(true), FormBuilder.USER_MINIMAL_DELAY)
      const transformedValue = transformations(id, value, pickFieldById(fields, id))

      const nextFields = changeField(id, transformedValue, stateFields)
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...(shouldRerenderAllFieldsOnChange && {renderer}), stateFields]
  )

  useEffect(() => {
    const reducerWithRules = reducer(rules, formID, baseAPIURL, responseInterceptor, requestInterceptor, locale)
    const timerShowSpinner = setTimeout(
      () => setStateShowSpinner(showSpinnerOnInitLoad),
      FormBuilder.USER_MINIMAL_DELAY
    )
    fieldsNamesInOrderOfDefinition(fields)
      .reduce(async (previousPromise, fieldId) => {
        const previousFields = await previousPromise

        const fieldHasNoInitValue = !initFields[fieldId] || initFields[fieldId] === ''

        const fieldDatalist = pickFieldById(previousFields, fieldId)?.datalist

        const fieldCanBeAutocompleted = allowAutoFillOnInitLoad && fieldHasNoInitValue && fieldDatalist?.length === 1

        if (!forceRulesOnAllFields && fieldHasNoInitValue && !fieldCanBeAutocompleted) {
          return previousFields
        }

        const nextFieldsChanged = changeField(
          fieldId,
          fieldCanBeAutocompleted ? fieldDatalist[0].value : initFields[fieldId],
          previousFields
        )
        const nextFieldsWithRules = await reducerWithRules(nextFieldsChanged, {
          type: RULES,
          id: fieldId
        })

        return nextFieldsWithRules
      }, Promise.resolve(stateFields))
      .then(nextFields => {
        clearTimeout(timerShowSpinner)
        setStateFields(nextFields)
        setStateShowSpinner(false)

        const nextStateFieldsObject = useNativeFieldType
          ? fieldsToObjectNativeTypes(nextFields)
          : fieldsToObject(nextFields)

        onInitFieldsLoadEnd({
          ...nextStateFieldsObject
        })
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
      {stateShowSpinner && <AtomSpinner type={atomSpinnerTypes.SECTION} loader={loader} />}
    </div>
  )
}

FormBuilder.USER_MINIMAL_DELAY = 250
FormBuilder.displayName = 'FormBuilder'

FormBuilder.propTypes = {
  /**
   * If it is true, formBuilder will autocomplete fields after load initFields,
   * if the next empty field it's an input select and has only one value in the loaded datalist.
   */
  allowAutoFillOnInitLoad: PropTypes.bool,
  /**
   * If it is true, formBuilder can reload its initFields via props.
   */
  allowInitFieldsReload: PropTypes.bool,
  forceRulesOnAllFields: PropTypes.bool,
  initFields: PropTypes.arrayOf(PropTypes.object),
  json,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  /**
   * Function to call when init fields are filled.
   */
  onInitFieldsLoadEnd: PropTypes.func,
  onFocus: PropTypes.func,
  responseInterceptor: PropTypes.func,
  requestInterceptor: PropTypes.func,
  /**
   * Show or not the spinner on init load. Useful if you want to control your own spinner on your page or component.
   */
  showSpinnerOnInitLoad: PropTypes.func,
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
  shouldRerenderAllFieldsOnChange: PropTypes.bool,
  children: PropTypes.func
}

export {fieldSizes as formBuilderFieldSizes}
export {pickFieldById as formBuilderPickFieldById}
export {changeFieldById as formBuilderChangeFieldById}
export {fieldsNamesInOrderOfDefinition as formBuilderFieldsNamesInOrderOfDefinition}
export {checkConstraintsFactory} from './Standard/index.js'
export default FormBuilder
