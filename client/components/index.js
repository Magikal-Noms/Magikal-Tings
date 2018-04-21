//havent deleted yet because im wondering if we would agree that its a better practice to do our components this way so that we dont need to import and export all crazy like

/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as UserHome} from './UserHome'
export {Login, Signup} from './AuthForm'
export {default as AllProducts} from './AllProducts'
export {default as Product} from './Product'
export {default as Navbar} from './Navbar'
export {default as Sidebar} from './Sidebar'
export {default as EditProductForm} from './EditProductForm'
export {default as NewProductForm} from './NewProductForm'
export {default as AllOrders} from './AllOrders'
export {default as Cart} from './Cart'
export {default as Category} from './Category'
export {default as Order} from './Order'
