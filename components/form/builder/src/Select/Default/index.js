import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeSelectField from '@s-ui/react-molecule-select-field'

import IconChevronDown from '../../Icons/IconChevronDown.js'
import IconCloseTag from '../../Icons/IconCloseTag.js'
import {createComponentMemo, field} from '../../prop-types/index.js'

const DefaultSelect = ({
  select,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  size,
  errors,
  alerts,
  renderer,
  multiselection = false
}) => {
  const errorMessages = errors[select.id]
  const alertMessages = alerts[select.id]

  const onChangeCallback = useCallback(
    (evt, {value, inputId = select.id}) => {
      return onChange(inputId, value)
    },
    [onChange, select]
  )

  const blurFocusParams = {
    type: select.type,
    display: select.display,
    label: select.label
  }

  const onBlurCallback = otherParams => onBlur(select.id, blurFocusParams, otherParams)

  const onFocusCallback = otherParams => onFocus(select.id, blurFocusParams, otherParams)

  const {datalist = []} = select

  // transform constraints to props
  const constraints = select.constraints || []
  let constraintsProps = {}
  constraintsProps = constraints.reduce((acc, constraint) => {
    if (constraint?.property?.notnull === '') {
      return {
        ...acc,
        required: true
      }
    } else {
      return acc
    }
  }, constraintsProps)

  const DEFAULT_SELECT_VALUE = multiselection ? [] : ''

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const selectProps = {
    id: select.id,
    label: select.label,
    name: select.name,
    placeholder: select.hint,
    children: select.children,
    content: select.content,
    iconArrowDown: <IconChevronDown />,
    iconCloseTag: <IconCloseTag />,
    value: select.value || DEFAULT_SELECT_VALUE,
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: select.help && <p>{select.help}</p>,
    tabIndex,
    ...(select.disabled && {disabled: true}),
    ...(select.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText}),
    selectSize: size,
    ...constraintsProps
  }

  const rendererResponse = renderer({
    id: select.id,
    innerProps: {
      ...selectProps,
      datalist,
      display: select.display,
      type: select.type
    }
  })

  if (selectProps.hidden) {
    return null
  }

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  const nextDataList = rendererResponse?.dataList || datalist

  // render SUI component
  return (
    <div className={`sui-FormBuilder-field sui-FormBuilder-DefaultSelect sui-FormBuilder-${selectProps.id}`}>
      {selectProps.children}

      <MoleculeSelectField {...selectProps} {...rendererResponse} multiselection={multiselection}>
        {nextDataList.map(({'aria-label': ariaLabel, value, text, description, leftAddon, ...others}) => (
          <MoleculeSelectOption
            aria-label={ariaLabel ?? text}
            key={value}
            value={value}
            description={description}
            leftAddon={leftAddon}
            {...others}
          >
            {text}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectField>

      {selectProps.content}
    </div>
  )
}

DefaultSelect.displayName = 'DefaultSelect'
DefaultSelect.propTypes = {
  select: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func,
  multiselection: PropTypes.bool
}

export default memo(DefaultSelect, createComponentMemo('select'))
