import axios  from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const get = products => {
    return {type: 'GET_PRODUCTS', products}
}

const create = product => {
    return { type: 'CREATE_PRODUCT', product}
}

const update = product => {
    return { type: 'UPDATE_PRODUCT', product}
}

const productsReducer = function(state = [], action) {
    console.log('reducer log', action.type)
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products

        case CREATE_PRODUCT:
            return [ action.product, ...state]

        case UPDATE_PRODUCT:
            return state.map(product => (
                action.product.id === product.id ? action.product : product
            ))

        default:
            return state
    }
}

export const fetchProducts = () => {
    console.log('run')
    return function thunk (dispatch) {
        return axios.get('/api/products')
        .then(res => res.data)
        .then(products => {
          dispatch(get(products))
        })
        .catch(console.error)
        }
    }

export const addProduct = product => dispatch => {
   axios.post('/api/products', product)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
}

export const updateProduct = (id, updatedProduct) => dispatch => {
   axios.put(`/api/products/${id}`, updatedProduct)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating product ${product}`))
}

export default productsReducer
