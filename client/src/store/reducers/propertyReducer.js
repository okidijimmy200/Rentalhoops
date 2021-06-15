import {
    PROPERTY_SEARCH_SUCCESS, 
    PROPERTY_SEARCH_REQUEST, 
    PROPERTY_SEARCH_FAIL,

    PRICE_SEARCH_FAIL,
    PRICE_SEARCH_REQUEST,
    PRICE_SEARCH_SUCCESS,

    ROOM_SEARCH_FAIL,
    ROOM_SEARCH_REQUEST,
    ROOM_SEARCH_SUCCESS

} from './../constants/propertyConstants'

export const propertySearchReducer = (state = { property: []}, action) => {
    switch (action.type) {
        case PROPERTY_SEARCH_REQUEST:
            return { property: [] }
        case PROPERTY_SEARCH_SUCCESS:
            return {  property: action.payload }
        case PROPERTY_SEARCH_FAIL:
            return {  error: action.payload }
        default:
            return state
    }
} 

export const priceSearchReducer = (state = { propertyPrice: []}, action) => {
    switch (action.type) {
        case PRICE_SEARCH_REQUEST:
            return { propertyPrice: [] }
        case PRICE_SEARCH_SUCCESS:
            return {  propertyPrice: action.payload }
        case PRICE_SEARCH_FAIL:
            return {  error: action.payload }
        default:
            return state
    }
} 

export const roomSearchReducer = (state = { propertyRooms: []}, action) => {
    switch (action.type) {
        case ROOM_SEARCH_REQUEST:
            return { propertyRooms: []}
        case ROOM_SEARCH_SUCCESS:
            return { propertyRooms: action.payload}
        case ROOM_SEARCH_FAIL:
            return { error: action.payload}

        default:
            return state
    }
}