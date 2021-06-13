import { 
    PROPERTY_SEARCH_SUCCESS, 
    PROPERTY_SEARCH_REQUEST, 
    PROPERTY_SEARCH_FAIL,
    
    ROOM_SEARCH_FAIL,
    ROOM_SEARCH_REQUEST,
    ROOM_SEARCH_SUCCESS    
} from './../constants/propertyConstants'

import axios from 'axios'; 

export const listSearch = (keyword, signal) => async (dispatch) => {
    try {
        dispatch({type: PROPERTY_SEARCH_REQUEST})

        const { data } = await axios.get(`/api/property/searchproperty?`+keyword)
          dispatch({type: PROPERTY_SEARCH_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        dispatch({
            type: PROPERTY_SEARCH_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const roomSearch = (query, signal) => async (dispatch) => {
    try {
        dispatch({type: ROOM_SEARCH_REQUEST})

        const {data} = await axios.get(`/api/property/pricesearch?`+query)
        dispatch({type: ROOM_SEARCH_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        dispatch({
            type: ROOM_SEARCH_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
