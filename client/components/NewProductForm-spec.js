import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {NewProductForm} from './NewProductForm'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('NewProductForm', () => {
  let newProductForm

  beforeEach(() => {
    newProductForm = shallow(<newProductForm product={'cody@email.com'} />)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
