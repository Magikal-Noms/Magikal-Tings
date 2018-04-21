import axios  from 'axios';

//Action types
const GET_CART = 'GET_CART'

//Action creators
const getCart = cart => {
    return {type: 'GET_CART', cart}
}
// const create = product => {
//     return { type: 'CREATE_PRODUCT', product}
// }
// const update = product => {
//     return { type: 'UPDATE_PRODUCT', product}
// }
//thunks
export const fetchCart = () => {
    return function thunk (dispatch) {
        return axios.get ('/api/cart')
          .then(res => res.data)
          .then(cartItems => {
            dispatch(getCart(cartItems))
          })
          .catch(console.error)
    }
}
// export const addProduct = product => dispatch => {
//     axios.post('/api/products/addProduct', product)
//       .then(res => dispatch(create(res.data)))
//       .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
// }
// export const editProduct = (id, updatedProduct) => dispatch => {
//     axios.put(`/api/products/${id}`, updatedProduct)
//       .then(res => dispatch(update(res.data)))
//       .catch(err => console.error(`Updating product ${product}`))
// }
//reducer
const cartReducer = function(state = null, action) {

    switch(action.type) {
        case GET_CART:
        return action.cart

        // case CREATE_PRODUCT:
        // return [...state, action.product]

        // case UPDATE_PRODUCT:
        // return state.map(product => (
        //     action.product.id === product.id ? action.product : product
        // ))
        default:
        return state
    }
}


export default cartReducer
