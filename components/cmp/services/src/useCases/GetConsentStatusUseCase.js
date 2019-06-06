export default function({repository}) {
  return {
    execute() {
      return repository.getConsentStatus()
    }
  }
}
