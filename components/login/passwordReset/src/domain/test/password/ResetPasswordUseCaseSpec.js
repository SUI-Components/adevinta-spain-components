/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import chai, {expect} from 'chai'

import Domain from '../../index.js'

describe('[Domain] ResetPasswordUseCase', () => {
  const domain = new Domain()
  const useCase = domain.get('reset_password_use_case')

  it('should successfully start the password reset process', async () => {
    const [error, result] = await useCase.execute({
      email: 'someone@adevinta.com'
    })
    expect(error).to.be.null
    expect(result).to.eql(true)
  })

  it('should return an exception if something goes wrong', async () => {
    const [error, result] = await useCase.execute({
      email: 'something-wrong'
    })
    expect(error).to.not.be.null
    expect(error.toString()).to.eql('Error: Unhandled error ocurred')
    expect(result).to.be.null
  })
})
