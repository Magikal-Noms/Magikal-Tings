
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER, // consider DECIMAL(10,2), but stick with what you have because you have it -- KHSG
    allowNull: false, 
    validate: { 
        min: 0
    }, 
    get() {
        //e.g. if we set a magic crystal to be 5034 on the backend it would still be returned to the user as $50.34
        //or if it's 400093 on the backend it would be returned as $4000.93 
        return '$' + this.getDataValue('price') / 100; 
    } 
  },
  properties: {
    type: Sequelize.TEXT // connotates non-searchable. use string if you want that -- KHSG
  }, 
  category: { // search by category?? normalize and reduce redundant and corrupt data with a new table. Crys! -- KHSG
      type: Sequelize.STRING 
  }, 
  picture: {
      type: Sequelize.STRING, 
      defaultValue: 'https://i.pinimg.com/originals/d7/d5/d8/d7d5d8696a558172808274b154936db7.jpg'
  }
})

Product.getProductByType = function(searchType) { // delete me -- KHSG
    return Product.findAll({ where: {
        type: searchType // this would be category anyways
    }}); 
}


module.exports = Product; 