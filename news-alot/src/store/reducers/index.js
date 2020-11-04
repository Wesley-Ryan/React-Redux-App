
 const initialState = { 
    newsData: [], 
    isLoading: false, 
    errors: ""
}

export const rootReducer = (state = initialState, action) => { 
    switch(action.type) { 
        case "something": 
        return "something else "


        default: 
        return state
    }
}