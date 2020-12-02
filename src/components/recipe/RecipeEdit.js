import React from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm'
import { startUpdateRecipe } from '../../actions/recipeAction'

function RecipeEdit(props){
    const handleFormSubmit = (data) => {
        const redirect = () => { props.history.push('/') }
        props.dispatch(startUpdateRecipe(props.recipe._id,data,redirect))
    }
    return(
        <div>
            <RecipeForm recipe={props.recipe} handleFormSubmit={handleFormSubmit}/>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        recipe : state.recipes.find(recipe => recipe._id===id)
    }   
}
export default connect(mapStateToProps)(RecipeEdit)