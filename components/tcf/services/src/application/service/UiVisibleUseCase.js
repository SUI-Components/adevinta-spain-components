class UiVisibleUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({visible}) {
    this._repository.uiVisible({visible})
  }
}

export {UiVisibleUseCase}
