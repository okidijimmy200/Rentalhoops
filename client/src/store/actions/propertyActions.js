import { searchProperty } from './../../property/api-property'
import { PROPERTY_SEARCH_SUCCESS, PROPERTY_SEARCH_REQUEST, PROPERTY_SEARCH_FAIL } from './../constants/propertyConstants'
import axios from 'axios'; 

export const listSearch = (keyword= '') => async (dispatch) => {
    try {
        dispatch({type: PROPERTY_SEARCH_REQUEST})

        const {  data } = await axios.get(`/api/property/searchproperty?keyword=${keyword}`)
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