
const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('line-item', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    
  },
  productPrice: {
    type: Sequelize.INTEGER
  }
})


module.exports = LineItem;