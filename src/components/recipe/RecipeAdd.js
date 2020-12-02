import React from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm'
import { startAddRecipe } from '../../actions/recipeAction'

function RecipeAdd(props){
    const handleFormSubmit = (data) => {
        const redirect = () => { props.history.push('/') }
        props.dispatch(startAddRecipe({...data,author : props.user._id},redirect))
    }
    return(
        <div>
            <RecipeForm handleFormSubmit={handleFormSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }   
}
export default connect(mapStateToProps)(RecipeAdd)