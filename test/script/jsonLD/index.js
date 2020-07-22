/* eslint react/jsx-no-undef:0 */
import React from 'react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

const json = {
  '@context': 'http://schema.org',
  '@type': 'AutoDealer',
  name: 'Dealer name',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avda. Maresme, 133',
    postalCode: '08302',
    addressLocality: 'Mataró'
  },
  image:
    'https://a.ccdn.es/coches/store_images_profesionales/123456_13032018103554.jpg',
  telephone: ['123456789'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '41.53194',
    longitude: '2.442895'
  }
}

describe('ScriptJsonLD', () => {
  it('Render', () => {
    render(<ScriptJsonLD json={json} />)
    expect(true).to.be.true
  })
})
