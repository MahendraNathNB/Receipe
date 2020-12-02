import { createStore, combineReducers, applyMiddleware } from "redux"
import  thunk  from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import recipeReducer from '../reducers/recipeReducer'

export default () => {
    const store = createStore(combineReducers({
                user : userReducer,
                recipes : recipeReducer
            }),applyMiddleware(thunk))
    return store
}
