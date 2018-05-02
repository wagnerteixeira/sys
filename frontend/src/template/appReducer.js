import actionTypes from '../consts/actionTypes'

const INITIAL_STATE = {
    drawerOpen : false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.DRAWER_CHANGE:
            if(action.payload) 
                return { ...state, drawerOpen: true }
            else 
                return { ...state, drawerOpen: false }                    
        default:
            return state
    }
}