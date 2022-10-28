const redux = require('redux')
const createStore = redux.createStore
const  combineReducers = redux.combineReducers

const reduxStringConstant = {
    BUY_CAKE:"BUY_CAKE",
    BUY_ICECREAM: "BUY_ICECREAM"
}

// const BUY_CAKE = "BUY_CAKE"

const buyCake = () => ({
    type: reduxStringConstant.BUY_CAKE,
    info: 'first redux action'
})

const buyIceCream = () => ({
    type: reduxStringConstant.BUY_ICECREAM
})

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {

//         case stringConstantForRedux.BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case stringConstantForRedux.BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case reduxStringConstant.BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case reduxStringConstant.BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubsribe = store.subscribe(() => (console.log("updated state", store.getState())))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubsribe()