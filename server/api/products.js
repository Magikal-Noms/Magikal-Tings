const router = require('express').Router()
const {Product, Category} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll({include: [Category]})
    .then(products => res.json(products))
    .catch(next)
})

function throwError(status, msg){
  const err = new Error(msg)
  err.status = status
  throw err;
}

router.get('/:productId', (req, res, next) => {
  Product.findById(+req.params.productId)
    .then(foundProduct => {
      if (!foundProduct) throwError(404, 'No such product')
      res.json(foundProduct)
    })
    .catch(next)
})

router.post('/addProduct', (req, res, next) => {
  Product.create(req.body)
    .then(createdProduct => res.status(201).json(createdProduct))
    .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  Product.destroy({
      where: {
        id: +req.params.productId
      }
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.put('/:productId', (req, res, next) => {
  Product.update(req.body, {
      where: {
        id: +req.params.productId
      },
      returning: true
    })
    .then(([rows, [product]]) => res.json(product))
    .catch(next)
})
