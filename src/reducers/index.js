import {combineReducers} from 'redux'
import movieReducer from './MovieReducer'

export default combineReducers({
    movies:movieReducer
})