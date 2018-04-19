/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import products from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe.only('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {product: {}}
  const fakeProduct = {name: "Shungite Dog Tag", price: 80,
    properties: "Specifically for Daisy", category: "Daisy things"}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  xdescribe('fetchProducts', () => {
    it('eventually dispatches the FETCH_PRODUCTS action', () => {
      mockAxios.onGet('/api/products').replyOnce(200, fakeProduct)
      return store.dispatch(fetchProducts())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_PRODUCTS')
          expect(actions[0].products).to.be.deep.equal(fakeProduct)
        })
    })
  })

  xdescribe('addProduct', () =>
  {
    it('eventually dispatches the ADD_PRODUCT action', () =>
    {
      mockAxios.onPost('/api/products').replyOnce(201, fakeProduct)
      return store.dispatch(addProduct(fakeProduct))
        .then(() =>
        {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('CREATE_PRODUCT')
          expect(actions[0].products).to.be.deep.equal(fakeProduct)
        })
    })
  })

  xdescribe('updateProduct', () => {
      it('eventually dispatches the UPDATE_PRODUCT action', () => {
        mockAxios.onPut('/api/products/1').replyOnce(201, fakeProduct)
        return store.dispatch(updateProduct(1, fakeProduct))
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('UPDATE_PRODUCT')
            expect(actions[0].products).to.be.deep.equal(fakeProduct)
          })
      })
  })
})
