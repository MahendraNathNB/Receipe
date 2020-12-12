import React from 'react'
import { connect } from 'react-redux'
import RecipeCard from './recipe/RecipeCard'

function HomePage(props){
    return(
            <div className="container">
        <h1> Home Page </h1>
                { props.recipes ?
                    <div className="card-deck m-3">
                        { props.recipes.map( (recipe,i) => {
                            return <RecipeCard recipe={recipe} key={recipe._id}/>
                        }) }
                    </div> : ''
                }
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        recipes : state.recipes
    }
}

export default connect(mapStateToProps)(HomePage)
