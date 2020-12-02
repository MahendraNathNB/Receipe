import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Account from './components/user/Account'

import HomePage from './components/HomePage'
import { startLogout } from './actions/userAction'

import RecipeAdd from './components/recipe/RecipeAdd'
import RecipeShow from './components/recipe/RecipeShow'
import MyRecipes from './components/recipe/MyRecipes'
import RecipeEdit from './components/recipe/RecipeEdit'

function App(props){
    const handleLogout = () => {
        const redirect = () => { document.location.reload() }
        props.dispatch(startLogout(redirect))
    }
    return(
        <BrowserRouter>
        <div className="container">
        { !props.user.username ? 
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <Link className="navbar-brand mr-auto p-2" style={{color:'orange'}} to='/users/login'>
                    <img src={logo} alt='logo'  />Hmmmm</Link>
                <nav className="nav justify-content-around">
                <Link className="nav-item p-2" to='/users/login'>Login</Link>
                <Link className="nav-item p-2" to='/users/register'>Register</Link>
                </nav>
            </nav>
            :
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <Link className="navbar-brand mr-auto p-2" style={{color:'orange'}} to='/users/login'>
                <img src={logo} alt='logo'  />Hmmmm</Link>                
                <Link className="nav-item p-2" to='/'>Home</Link>
                <Link className="nav-item p-2" to='/myrecipes'>My Recipes</Link>
                <Link className="nav-item p-2" to='/recipes/add'>Add New Recipe</Link>
                <Link className="nav-item p-2" to='/account'> Account </Link>                
                <Link className="nav-item p-2" to='#' onClick={handleLogout}>Logout</Link>
            </nav>
        }
        </div>
        <Switch>
            
            <Route path='/users/login' component={Login}/>
            <Route path='/users/register' component={Register} />
            <Route path='/' component={HomePage} exact={true}/>
            <Route path='/account' component={Account} />
            <Route path='/recipes/add' component={RecipeAdd} />
            <Route path='/myrecipes' component={MyRecipes} exact={true} />
            <Route path='/myrecipes/edit/:id' component={RecipeEdit} />
            <Route path='/recipes/:id' component={RecipeShow} />
        </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(App)