const User = require('./user');
const Product = require('./product');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 *
 */

// User.hasMany(Product, { through: 'userItems' });
// Product.belongsToMany(User, { through: 'userItems'});
//hasMany and belongsToMany don't go together
//User has orders, not products
//User has many orders
//order has one User
//products and orders are many to many

module.exports = {
  User, Product
}
