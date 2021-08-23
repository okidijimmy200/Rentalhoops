//where we connect our reducers
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { propertySearchReducer, priceSearchReducer, roomSearchReducer } from './reducers/propertyReducer'

const reducer = combineReducers({
    propertySearch: propertySearchReducer,
    priceSearchList: priceSearchReducer,
    roomSearchList: roomSearchReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware
    (...middleware)))

export default store