import { combineReducers } from 'redux'
import { reducerData } from './reducerData'
import { reducerCount } from './reducerCount'


export const rootReducer = combineReducers({
    data: reducerData,
    count: reducerCount
})