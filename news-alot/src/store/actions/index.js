import axios from 'axios'
import { BASE_URL } from '../../utils'


export const FETCH_NEWS_START = "FETCH_NEWS_START"
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS"
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE"

export const getArticles = () => { 

    return (dispatch) => { 
        dispatch({type: FETCH_NEWS_START})

        axios
        .get(BASE_URL)
        .then((response) => { 
            dispatch({type: FETCH_NEWS_SUCCESS, payload: response.data.articles})
        })
        .catch((error) => { 
            console.log("There was an error retrieving the data", error)
        })
    }   
}
