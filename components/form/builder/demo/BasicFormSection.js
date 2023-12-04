import {useState} from 'react'

import FormBuilder from 'components/form/builder/src/index.js'
import {checkConstraintsFactory} from 'components/form/builder/src/Standard/index'
import PropTypes from 'prop-types'

import {FORM_BUILDER_SELECT_FIELD_MOCK} from '../mocks/index.js'

export default function BasicFormSection({
  json: formJsonProp = FORM_BUILDER_SELECT_FIELD_MOCK,
  errors: errorsProp = {},
  ...restProps
}) {
  const [json] = useState(formJsonProp)
  const [stateFields, setStateFields] = useState({})
  const [errors, setErrors] = useState(errorsProp)

  const handleFormSubmit = e => {
    e.preventDefault()

    // Get form errors to print it
    const newNativeErrors = checkConstraintsFactory(json, 'es-ES')({all: true})

    if (newNativeErrors) {
      setErrors(newNativeErrors)
    }
  }

  return (
    <section style={{padding: '16px', marginBottom: '16px'}}>
      <form onSubmit={handleFormSubmit} noValidate>
        <FormBuilder errors={errors} json={json} onChange={fields => setStateFields(fields)} {...restProps} />
        <button>Submit</button>
      </form>
      <pre
        style={{
          maxHeight: '400px',
          border: '1px solid',
          margin: '5px 5px',
          overflowY: 'scroll'
        }}
      >
        <code>{JSON.stringify(stateFields, null, 2)}</code>
      </pre>
    </section>
  )
}

BasicFormSection.propTypes = {
  json: PropTypes.object,
  errors: PropTypes.object
}
