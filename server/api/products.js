const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next)
})
// function throwError(status, msg) { -- khsg
//   const err = new Error(msg)
//   err.status = status
//   throw err;
// }
router.get('/:productId', (req, res, next) => {
  Product.findById(+req.params.productId)
  .then(foundProduct => { // indentation??!?! -- KHSG
    // if (!foundProduct)  throwError(404, 'No such product')
    if (!foundProduct) return res.status(404).send('No such product found') // use your error handling middleware!! -- KHSG
    res.json(foundProduct)
  })
  .catch(next)
})

// front end is superficially secure, insecure
// security is ONLY on the backends

router.post('/addProduct', isLoggedIn, (req, res, next) => { // move into own utility functions of isLoggedIn, isAdmin -- KHSG
  if (!req.user) throwError(401, 'Unauthorized') // isLoggedIn (if you pull this out and name it that)
  if (!req.user.isAdmin) throwError(403, 'Forbidden')
  next()
}, (req, res, next) => {
  Product.create(req.body)
  .then(createdProduct => res.status(201).json(createdProduct))
  .catch(next)
})

router.delete('/:productId', (req, res, next) => { // isAdmin, etc -- KHSG
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
    .then(([rows, [product]]) => res.status(201).json(product[1][0])) // not 201; and warn against [1][0] because it isn't descriptive. Either have a comment or make your code self-documenting -- KHSG
    .catch(next)
})




