import actionTypes from '../consts/actionTypes'

export function handleDrawer(state) {
    return {
        type: actionTypes.DRAWER_CHANGE,
        payload: state
    }    
}

  