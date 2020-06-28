import counterReducer from './counter'
import loggedReducer from './isLogged'
import objectReducer from './objectReducers'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    objectReducer 
})

export default allReducers