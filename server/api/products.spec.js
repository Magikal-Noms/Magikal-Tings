/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/products/', () => {

    beforeEach(() => {
      return Product.create({
        name: "Some Item",
        price: "2.99"
      })
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal("Some Item")
        })
    })
  }) // end describe('/api/users')

    describe('GET /products/:productId', function () {
      beforeEach(() => {
        return Product.create({
          id: 15,
          name: "Some Item",
          price: "2.99"
        })
      })

    it('GET /api/products/:productId', () => {
      return request(app)
        .get('/api/products/15')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal("Some Item")
        })
    })

  }) // end describe('Product routes')
})
