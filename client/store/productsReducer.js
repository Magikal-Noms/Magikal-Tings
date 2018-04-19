import axios  from 'axios';

//Action types
const GET_PRODUCTS = 'GET_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

//Action creators
const getProducts = products => {
    return {type: 'GET_PRODUCTS', products}
}
const create = product => {
    return { type: 'CREATE_PRODUCT', product}
}
const update = product => {
    return { type: 'UPDATE_PRODUCT', product}
}
//thunks
export const fetchProducts = () => {
    return function thunk (dispatch) {
        return axios.get ('/api/products')
          .then(res => res.data)
          .then(products => {
            dispatch(getProducts(products))
          })
          .catch(console.error)
    }
}
export const addProduct = product => dispatch => {
    axios.post('/api/products/addProduct', product)
      .then(res => dispatch(create(res.data)))
      .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
}
export const editProduct = (id, updatedProduct) => dispatch => {
    axios.put(`/api/products/${id}`, updatedProduct)
      .then(res => dispatch(update(res.data)))
      .catch(err => console.error(`Updating product ${product}`))
}
//reducer
const productsReducer = function(state = [], action) {
    
    switch(action.type) {
        case GET_PRODUCTS: 
        return action.products
        
        case CREATE_PRODUCT:
        return [...state, action.product]
        
        case UPDATE_PRODUCT:
        return state.map(product => (
            action.product.id === product.id ? action.product : product
        ))
        default: 
        return state
    }
}


export default productsReducer
