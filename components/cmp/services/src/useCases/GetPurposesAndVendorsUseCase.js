export default function({repository}) {
  const loadDefaultConsents = ({repository}) => {
    return repository.getPurposesAndVendors().then(purposesAndVendors => ({
      ...purposesAndVendors,
      ...generateDefaultConsentsObject(purposesAndVendors)
    }))
  }

  const loadStoredConsents = ({repository}) => {
    return Promise.all([
      repository.getPurposesAndVendors(),
      repository.getVendorConsents()
    ])
      .then(([purposesAndVendors, consents]) => {
        return {
          ...purposesAndVendors,
          purposeConsents: consents.purposeConsents,
          vendorConsents: consents.vendorConsents
        }
      })
      .catch(loadDefaultConsents)
  }

  const generateConsent = ({list}) =>
    list.reduce((acc, {id}) => {
      acc[id.toString()] = true
      return acc
    }, {})

  const generateDefaultConsentsObject = ({purposes, vendors}) => ({
    purposeConsents: generateConsent({list: purposes}),
    vendorConsents: generateConsent({list: vendors})
  })

  return {
    execute({retrieveConsentsFromCmp} = {}) {
      return Promise.resolve(retrieveConsentsFromCmp).then(retrieve =>
        retrieve
          ? loadStoredConsents({repository})
          : loadDefaultConsents({repository})
      )
    }
  }
}
