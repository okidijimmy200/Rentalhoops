import {PROPERTY_SEARCH_SUCCESS, PROPERTY_SEARCH_REQUEST, PROPERTY_SEARCH_FAIL} from './../constants/propertyConstants'

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