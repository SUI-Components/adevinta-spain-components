class UiVisibleUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({visible}) {
    return this._repository.uiVisible({visible})
  }
}

export {UiVisibleUseCase}
