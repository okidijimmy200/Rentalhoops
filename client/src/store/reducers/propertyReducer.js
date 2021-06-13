import {
    PROPERTY_SEARCH_SUCCESS, 
    PROPERTY_SEARCH_REQUEST, 
    PROPERTY_SEARCH_FAIL,
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

export const roomSearchReducer = (state = { propertyRoom: []}, action) => {
    switch (action.type) {
        case ROOM_SEARCH_REQUEST:
            return { propertyRoom: [] }
        case ROOM_SEARCH_SUCCESS:
            return {  propertyRoom: action.payload }
        case ROOM_SEARCH_FAIL:
            return {  error: action.payload }
        default:
            return state
    }
} 