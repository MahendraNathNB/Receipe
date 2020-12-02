import React from 'react'
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard'

function MyRecipes(props){
    return(
            <div className="container">
                { props.recipes ?
                    <div className="card-deck m-3">
                        { props.recipes.map( (recipe,i) => {
                                return <RecipeCard recipe={recipe} author={true}  key={recipe._id}/>
                        }) }
                    </div> : ''
                }
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        recipes : state.recipes.filter(recipe => recipe.author._id === state.user._id)
    }
}

export default connect(mapStateToProps)(MyRecipes)
