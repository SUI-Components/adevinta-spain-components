import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'
import {ConsentItem} from '../ConsentItem'
import {ConsentDescription} from '../ConsentDescription'

import {CLASS} from '../settings'

export const Consents = ({
  consents,
  disableAllLiteral,
  enableAllLiteral,
  features,
  i18n,
  isVendor,
  list,
  onToggleAll,
  onToggleConsent,
  purposes,
  title
}) => (
  <section className={`${CLASS}-consents`}>
    <h2 className={`${CLASS}-title ${CLASS}-consentsTitle`}>{title}</h2>
    <div className={`${CLASS}-consentsActions`}>
      <Button
        onClick={event => onToggleAll({event, enabled: false, isVendor})}
        type="secondary"
        size="small"
      >
        {disableAllLiteral}
      </Button>
      <Button
        onClick={event => onToggleAll({event, enabled: true, isVendor})}
        type="primary"
        size="small"
      >
        {enableAllLiteral}
      </Button>
    </div>
    <div className={`${CLASS}-consentsTable`}>
      {list.map(
        ({
          id,
          name,
          legIntPurposeIds,
          purposeIds,
          featureIds,
          description,
          policyUrl
        }) => (
          <ConsentItem
            enabled={consents[id]}
            id={id}
            isVendor={isVendor}
            key={id}
            name={name}
            onToggleConsent={onToggleConsent}
            renderDescription={() => (
              <ConsentDescription
                description={description}
                featureIds={featureIds}
                features={features}
                i18n={i18n}
                isVendor={isVendor}
                legIntPurposeIds={legIntPurposeIds}
                policyUrl={policyUrl}
                purposeIds={purposeIds}
                purposes={purposes}
              />
            )}
            url={policyUrl}
          />
        )
      )}
    </div>
  </section>
)

Consents.propTypes = {
  consents: PropTypes.object.isRequired,
  features: PropTypes.array,
  disableAllLiteral: PropTypes.string,
  enableAllLiteral: PropTypes.string,
  i18n: PropTypes.object,
  isVendor: PropTypes.bool,
  list: PropTypes.array.isRequired,
  onToggleAll: PropTypes.func.isRequired,
  onToggleConsent: PropTypes.func.isRequired,
  purposes: PropTypes.array,
  title: PropTypes.string
}
