import axios from 'axios';

//Action types
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';

//Action creators
const getCart = cart => {
  return {
    type: 'GET_CART',
    cart
  }
}
const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
}
// const update = product => {
//     return { type: 'UPDATE_PRODUCT', product}
// }
//thunks
export const fetchCart = () => {
  return function thunk(dispatch) {
    return axios.get('/api/cart')
      .then(res => res.data)
      .then(cartItems => {
        dispatch(getCart(cartItems))
      })
      .catch(console.error)
  }
}

export const addProductToCart = (productId) => {
  return function thunk(dispatch) {
    return axios.post(`/api/cart/products/${productId}`, {
        productId,
        quantity: 1
      })
      .then(res => dispatch(addToCart(res.data)))
      .catch(err => console.error(`Adding to cart: ${productId} unsuccessful`, err))
  }
}

// export const editProduct = (id, updatedProduct) => dispatch => {
//     axios.put(`/api/products/${id}`, updatedProduct)
//       .then(res => dispatch(update(res.data)))
//       .catch(err => console.error(`Updating product ${product}`))
// }
//reducer
const cartReducer = function(state = null, action) {

  switch (action.type) {
    case GET_CART:
      return action.cart

    case ADD_TO_CART:
      return [...state, action.product]

      // case UPDATE_PRODUCT:
      // return state.map(product => (
      //     action.product.id === product.id ? action.product : product
      // ))
    default:
      return state
  }
}


export default cartReducer
