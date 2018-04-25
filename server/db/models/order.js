
const Sequelize = require('sequelize')
const db = require('../db')
const LineItem = require('./lineitem')
const Product = require('./product')

const Order = db.define('order', {
  shippingAddress: {
    type: Sequelize.STRING,
  },
  billingAddress: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM('complete', 'pending')
  },
  userId: {
    type: Sequelize.INTEGER,
  }
},
{
  defaultScope:  {include: [{model: LineItem, include: [Product]}]}
})


module.exports = Order;
