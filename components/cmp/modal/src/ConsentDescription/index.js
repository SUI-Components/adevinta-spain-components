import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Section = ({title, data, ids}) => {
  const content = ids.map(id => {
    const {name, description} = data.find(singleData => singleData.id === id)
    return (
      <p key={id}>
        <strong>{name}: </strong>
        {description}
      </p>
    )
  })

  if (content.length === 0) return null

  return (
    <Fragment>
      <h3>{title}</h3>
      {content}
    </Fragment>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  ids: PropTypes.array
}

export const ConsentDescription = ({
  description,
  i18n,
  isVendor,
  features,
  featureIds,
  purposeIds,
  legIntPurposeIds,
  purposes,
  policyUrl
}) => {
  if (!isVendor) return description

  return (
    <Fragment>
      <p>
        <strong>{i18n['POLICY_PRIVACY']}</strong>:<br />
        <a href={policyUrl}>{policyUrl}</a>
      </p>
      <Section title={i18n['PURPOSES']} data={purposes} ids={purposeIds} />
      <Section
        title={i18n['LEGITIMATE_INTEREST_FOR']}
        data={purposes}
        ids={legIntPurposeIds}
      />
      <Section title={i18n['FEATURES']} data={features} ids={featureIds} />
    </Fragment>
  )
}

ConsentDescription.propTypes = {
  description: PropTypes.string,
  featureIds: PropTypes.arrayOf(PropTypes.number),
  i18n: PropTypes.object,
  purposeIds: PropTypes.arrayOf(PropTypes.number),
  legIntPurposeIds: PropTypes.arrayOf(PropTypes.number),
  isVendor: PropTypes.bool,
  features: PropTypes.array,
  purposes: PropTypes.array,
  policyUrl: PropTypes.string
}
