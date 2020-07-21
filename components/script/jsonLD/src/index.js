import React from 'react'
import PropTypes from 'prop-types'

function ScriptJsonLD({json}) {
  return (
    <>
      {json && (
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      )}
    </>
  )
}

ScriptJsonLD.displayName = 'ScriptJsonLD'
ScriptJsonLD.propTypes = {
  json: PropTypes.object.isRequired
}

export default ScriptJsonLD
