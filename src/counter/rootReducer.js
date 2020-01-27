import { combineReducers } from 'redux'
import { reducerData } from './reducerData'

export const rootReducer = combineReducers({
    data: reducerData,
})