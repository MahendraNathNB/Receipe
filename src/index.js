import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


import configureStore from './store/configureStore'
import App from './App'
import { startGetRecipes } from './actions/recipeAction'
import { startGetUser } from './actions/userAction'

const store = configureStore()

store.dispatch(startGetRecipes())

if(localStorage.getItem('auth-token')){
    store.dispatch(startGetUser())
}
store.subscribe(()=>console.log(store.getState()))

const ele = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(ele,document.getElementById('root'))