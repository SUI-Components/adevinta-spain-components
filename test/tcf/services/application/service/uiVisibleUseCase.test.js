/* eslint-env jest */
import {UiVisibleUseCase} from '../../../../../components/tcf/services/src/application/service/UiVisibleUseCase'
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
describe('UiVisibleUseCase test', () => {
  const borosMethods = {
    saveUserConsent: () => Promise.resolve(null),
    getVendorList: () => Promise.resolve(null),
    loadUserConsent: () => Promise.resolve(null),
    uiVisible: () => Promise.resolve(null)
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const uiVisibleSpy = jest.spyOn(borosMethods, 'uiVisible')

  it('should send correct data when executed', async () => {
    const visible = true
    const tcfRepositoryMock = new TcfRepositoryMock({
      tcfApi: borosTCFMock.init()
    })
    const uiVisibleUseCase = new UiVisibleUseCase({
      repository: tcfRepositoryMock
    })
    await uiVisibleUseCase.execute({visible})
    expect(uiVisibleSpy).toHaveBeenCalledTimes(1)
    expect(uiVisibleSpy).toHaveBeenCalledWith({visible})
  })
})
