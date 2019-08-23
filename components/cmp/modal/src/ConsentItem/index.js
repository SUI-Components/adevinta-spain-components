import React from 'react'
import PropTypes from 'prop-types'
import AtomSwitch from '@s-ui/react-atom-switch'

import {ConsentName} from '../ConsentName'
import {CLASS} from '../settings'

export const ConsentItem = ({
  enabled,
  id,
  onToggleConsent,
  name,
  isVendor,
  renderDescription,
  url
}) => (
  <div className={`${CLASS}-consent`}>
    <ConsentName name={name} url={url} renderDescription={renderDescription} />
    <div className={`${CLASS}-consentActions`}>
      <AtomSwitch
        initialValue={enabled}
        label=""
        labelLeft=""
        labelRight=""
        name={`${id}-switch`}
        onToggle={() => onToggleConsent({enabled: !enabled, id, isVendor})}
        type="toggle"
      />
    </div>
  </div>
)

ConsentItem.propTypes = {
  enabled: PropTypes.bool,
  id: PropTypes.number.isRequired,
  isVendor: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onToggleConsent: PropTypes.func,
  renderDescription: PropTypes.func,
  url: PropTypes.string
}
