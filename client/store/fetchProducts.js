import axios  from 'axios';
// organization of store files should be consistent -- KHSG


// products
    // - get, update, add, delete

const GET_PRODUCTS = 'GET_PRODUCTS'

const getProducts = products => {
    return {type: 'GET_PRODUCTS', products}
}

const productsReducer = function(state = [], action) {
    
    switch(action.type) {
        case GET_PRODUCTS: 
        return action.products // indentation -- KHSG
        // add product
            // [...state, product]
        default: return state // why is this return on the same line? -- KHSG
    }
}

export const fetchProducts = () => {
    // space? -- KHSG
    return function thunk (dispatch) {
        return axios.get ('/api/products')
        .then(res => res.data)
        .then(products => {
          dispatch(getProducts(products))
        })
        .catch(console.error)
        }
    }


export default productsReducer