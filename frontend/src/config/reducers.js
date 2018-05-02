import { combineReducers } from 'redux'
import AppReducer from '../template/appReducer'

const rootReducer = combineReducers({
    app: AppReducer,
})

export default rootReducer