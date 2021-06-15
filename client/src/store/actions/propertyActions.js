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

import axios from 'axios'; 

export const listSearch = (keyword, signal) => async (dispatch) => {
    try {
        dispatch({type: PROPERTY_SEARCH_REQUEST})

        const { data } = await axios.get(`/api/property/searchproperty?`+keyword)
          dispatch({type: PROPERTY_SEARCH_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROPERTY_SEARCH_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const priceSearch = (query, signal) => async (dispatch) => {
    try {
        dispatch({type: PRICE_SEARCH_REQUEST})

        const {data} = await axios.get(`/api/property/pricesearch?`+query)
        dispatch({type: PRICE_SEARCH_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        dispatch({
            type: PRICE_SEARCH_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const roomSearch = (roomNumber, signal) => async (dispatch) => {
    try {
        dispatch({type: ROOM_SEARCH_REQUEST})
        
        const { data } = await axios.get(`/api/property/roomnumber?`+roomNumber)
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