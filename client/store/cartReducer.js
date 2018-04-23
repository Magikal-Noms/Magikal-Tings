import axios from 'axios';

//Action types
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART'

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
const deleteFromCart = lineItem => {
  return {
    type: DELETE_FROM_CART,
    lineItem
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

export const addProductToCart = (productId) => {
  return function thunk(dispatch) {
    return axios.post(`/api/cart/products/${productId}`, {
        productId,
        quantity: 1
      })
      .then(res => {
        return (dispatch) => {
          dispatch(addToCart(res.data))
        }
      })
      .catch(err => console.error(`Adding to cart: ${productId} unsuccessful`, err))
  }
}

export const deleteProductFromCart = (lineItemId) => {
  return function thunk(dispatch) {
     axios.delete(`/api/cart/${lineItemId}`, {
      lineItemId
    })
      .then(res => {
        return (dispatch) => {
          dispatch(deleteFromCart(res.data))
        }
      })
      .catch(err => console.error('Deleting from cart unsucessful', err))
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

    case DELETE_FROM_CART:
      return [state['line-items'].filter(lineItem => lineItem.id !== action.lineItem.id)]

      // case UPDATE_PRODUCT:
      // return state.map(product => (
      //     action.product.id === product.id ? action.product : product
      // ))
    default:
      return state
  }
}


export default cartReducer
