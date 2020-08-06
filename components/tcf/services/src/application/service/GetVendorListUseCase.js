class GetVendorListUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    return this._repository.getVendorList()
  }
}

export {GetVendorListUseCase}
