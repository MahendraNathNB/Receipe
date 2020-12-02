import React from 'react'
import { connect } from 'react-redux'

function RecipeShow(props){
    return(
        <div>
            { props.recipe ? 
            <div style={{color:'white',textAlign:'center'}}>
                <h1>{props.recipe.name}</h1>
                <h3>({props.recipe.description})</h3>
                <h5>Ingredients : {props.recipe.ingredients.join(',')}</h5>
                <p>Directions : {props.recipe.directions}</p>
            </div> : ''}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        recipe : state.recipes.find(recipe=>{return recipe._id === id})
    }
}
export default connect(mapStateToProps)(RecipeShow)
