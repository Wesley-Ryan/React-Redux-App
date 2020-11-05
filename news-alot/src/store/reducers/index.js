import { FETCH_NEWS_START, 
    FETCH_NEWS_SUCCESS, 
    FETCH_NEWS_FAILURE } from '../actions'



 const initialState = { 
    articlesData: [], 
    isLoading: false, 
    error: ""
}

export const rootReducer = (state = initialState, action) => { 
    switch(action.type) { 

        case FETCH_NEWS_START: 
        
        return { 
            ...state, 
            isLoading: true, 
            error: ""
        }

        case FETCH_NEWS_SUCCESS: 
        
        return { 
            ...state, 
            isLoading: false, 
            articlesData:action.payload, 
            
        }


        default: 
        return state
    }
}