import axios from 'axios';

//Action types
const GET_CART = 'GET_CART';

//Action creators
const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

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

export const addProductToCart = (productId, history) => {
  return function thunk(dispatch) {
    return axios.post(`/api/cart/products/${productId}`, {
        quantity: 1
      })
      .then(res => {
        dispatch(getCart(res.data))
        history.push('/cart')
      })
      .catch(err => console.error(`Adding to cart: ${productId} unsuccessful`, err))
  }
}

export const deleteProductFromCart = (lineItemId) => {
  return function thunk(dispatch) {
     axios.delete(`/api/cart/${lineItemId}`, {
      lineItemId
    })
      .then(res => dispatch(getCart(res.data)))
      .catch(err => console.error('Deleting from cart unsucessful', err))
  }
}

const cartReducer = function(state = null, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart

    default:
      return state
  }
}


export default cartReducer
