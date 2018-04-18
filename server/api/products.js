const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:productId', (req, res, next) => {
  Product.findById(+req.params.productId)
  .then(foundProduct => {
    if (!foundProduct) return res.status(404).send('No such product found')
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
  Product.destroy({where: {id: +req.params.productId}})
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.put('/:productId', (req, res, next) => {
  Product.update(req.body,
    {
      where: {
        id: +req.params.productId
      },
      returning: true
    })
    .then(product => res.status(201).json(product[1][0]))
    .catch(next)
})
