import PropTypes from 'prop-types'

export const constraint = PropTypes.shape({
  property: PropTypes.shape({
    max: PropTypes.string,
    min: PropTypes.string
  }).isRequired,
  message: PropTypes.string.isRequired
})

export const datalist = PropTypes.shape({
  value: PropTypes.string,
  text: PropTypes.string
})

export const field = PropTypes.shape({
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  value: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  datalist: PropTypes.arrayOf(datalist),
  constraints: PropTypes.arrayOf(constraint),
  // eslint-disable-next-line no-use-before-define
  fields
}).isRequired

export const fields = PropTypes.arrayOf(field)

export const form = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  actionlabel: PropTypes.string,
  fields
}).isRequired

export const json = PropTypes.shape({
  form
}).isRequired

export const createComponentMemo = field => (nextProps, prevProps) => {
  return (
    JSON.stringify(nextProps[field]) === JSON.stringify(prevProps[field]) &&
    nextProps.errors[nextProps[field].id] ===
      prevProps.errors[prevProps[field].id] &&
    nextProps.alerts[nextProps[field].id] ===
      prevProps.alerts[prevProps[field].id] &&
    nextProps.onChange === prevProps.onChange
  )
}
