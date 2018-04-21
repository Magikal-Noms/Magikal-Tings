const router = require('express').Router()
const {LineItem} = require('../db/models')
const {Order} = require('../db/models')
module.exports = router


router.get('/', (req,res,next) => {
    // console.log('user', req.sessions)
    Order.findAll({
        where: {
            userId: 1, //req.session.id
            status: 'pending'
        } },   
        {
            include: [LineItem]

    })
        .then(cart => res.json(cart))
        .catch(next)
})
