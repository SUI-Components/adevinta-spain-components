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
  isVendor,
  features,
  featureIds,
  purposeIds,
  legIntPurposeIds,
  purposes,
  policyUrl
}) => {
  if (!isVendor) return description

  // console.log({features, featureIds, purposes, purposeIds, legIntPurposeIds})

  return (
    <Fragment>
      <p>
        <strong>Privacy Policy</strong>: <a href={policyUrl}>{policyUrl}</a>
      </p>
      <Section title="Purposes" data={purposes} ids={purposeIds} />
      <Section
        title="Legitimate Interest For"
        data={purposes}
        ids={legIntPurposeIds}
      />
      <Section title="Features" data={features} ids={featureIds} />
    </Fragment>
  )
}

ConsentDescription.propTypes = {
  description: PropTypes.string,
  featureIds: PropTypes.arrayOf(PropTypes.number),
  purposeIds: PropTypes.arrayOf(PropTypes.number),
  legIntPurposeIds: PropTypes.arrayOf(PropTypes.number),
  isVendor: PropTypes.bool,
  features: PropTypes.array,
  purposes: PropTypes.array,
  policyUrl: PropTypes.string
}
