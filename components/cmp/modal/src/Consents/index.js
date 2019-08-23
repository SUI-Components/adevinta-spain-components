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
        onClick={() => onToggleAll({enabled: false, isVendor})}
        type="secondary"
        size="small"
      >
        {disableAllLiteral}
      </Button>
      <Button
        onClick={() => onToggleAll({enabled: true, isVendor})}
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
            renderDescription={() => (
              <ConsentDescription
                isVendor={isVendor}
                featureIds={featureIds}
                features={features}
                legIntPurposeIds={legIntPurposeIds}
                purposes={purposes}
                purposeIds={purposeIds}
                description={description}
                policyUrl={policyUrl}
              />
            )}
            onToggleConsent={onToggleConsent}
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
  isVendor: PropTypes.bool,
  list: PropTypes.array.isRequired,
  onToggleAll: PropTypes.func.isRequired,
  onToggleConsent: PropTypes.func.isRequired,
  purposes: PropTypes.array,
  title: PropTypes.string
}
