import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, AllProducts, Product, Category,
 NewProductForm, EditProductForm, Sidebar, Navbar, Cart, AllOrders, Order} from './components'
import {me} from './store'
import store from './store'
import { fetchUserOrders } from './store';
import { fetchProducts } from './store';
import {fetchCategories} from './store';
import {fetchCart} from './store'
import {addProductToCart} from './store'

/**
* COMPONENT
*/
class Routes extends Component {
 componentDidMount () {
   this.props.loadInitialData()

   const productsThunk = fetchProducts();
   const categoriesThunk = fetchCategories();
   const ordersThunk = fetchUserOrders();
   // const cartThunk = fetchCart();

   store.dispatch(categoriesThunk);
   store.dispatch(ordersThunk);
   store.dispatch(productsThunk)
   // store.dispatch(cartThunk)
   // store.dispatch(addProductThunk);

 }

 render () {
   const {isLoggedIn} = this.props
   if (!this.props.products || !this.props.categories){
     return "LOADING"
   } else if (this.props.isLoggedIn && !this.props.cart){
     return "LOADING"
   }
   return (
     <Switch>
       {/* Routes placed here are available to all visitors */}
       <Route exact path='/products' component={AllProducts} />
       <Route exact path='/products/editproduct' component={EditProductForm} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/signup' component={Signup} />
       <Route exact path='/orders' component={AllOrders} />
       <Route exact path='/orders/:orderId' component={Order} />
       <Route exact path='/products/addproduct' component={NewProductForm} />
       <Route exact path='/products/:productId' component={Product} />
       <Route exact path='/cart' component={Cart} />
       <Route exact path='/categories/:category' component={Category} />
       <Route exact path='/cart/products/:productId' component={Cart}/>

       {
         isLoggedIn &&
           <Switch>
             {/* Routes placed here are only available after logging in */}
             <Route path="/home" component={UserHome} />
           </Switch>
       }
       {/* Displays our Login component as a fallback */}
       </Switch>
     )
   }
 }

 /**
  <Route component={Login} />
* CONTAINER
*/
const mapState = (state) => {
 return {
   // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
   // Otherwise, state.user will be an empty object, and state.user.id will be falsey
   isLoggedIn: !!state.user.id,
   products: state.products,
   categories: state.categories,
   cart: state.cart
 }
}

const mapDispatch = (dispatch) => {
 return {
   loadInitialData () {
     dispatch(fetchCart())
   }
 }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
* PROP TYPES
*/
Routes.propTypes = {
 loadInitialData: PropTypes.func.isRequired,
 isLoggedIn: PropTypes.bool.isRequired
}

