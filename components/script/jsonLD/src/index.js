import PropTypes from 'prop-types'

function ScriptJsonLD({json}) {
  return <>{json && <script dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} type="application/ld+json" />}</>
}

ScriptJsonLD.displayName = 'ScriptJsonLD'
ScriptJsonLD.propTypes = {
  json: PropTypes.object.isRequired
}

export default ScriptJsonLD
