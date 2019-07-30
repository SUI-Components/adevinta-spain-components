export default function({repository}) {
  return {
    execute({purposeConsents, vendorConsents}) {
      return repository.sendConsents({purposeConsents, vendorConsents})
    }
  }
}
