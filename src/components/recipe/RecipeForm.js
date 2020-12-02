import React from 'react'
import MultipleValueTextInput from 'react-multivalue-text-input';

class RecipeForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : props.recipe ? props.recipe.name : '',
            description : props.recipe ? props.recipe.description : '',
            ingredients : props.recipe ? props.recipe.ingredients : [],
            directions : props.recipe ? props.recipe.directions : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleFormSubmit(this.state)
    }
    render(){
        return(
            <div>
                <h1>My Recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" required/>
                    <input name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" required/>
                    <MultipleValueTextInput
                        onItemAdded={(ingredient, allItems) => this.setState({ingredients : allItems})}
                        onItemDeleted={(ingredient, allItems) => this.setState({ingredients : allItems})}
                        label="Ingredients"
                        name="ingredient-input"
                        placeholder="Enter whatever items you want; separate them with COMMA or ENTER."
                        values = {this.props.recipe ? this.state.ingredients : []}
                    />
                    <textarea name="directions" value={this.state.directions} onChange={this.handleChange} rows="15" cols="60" placeholder="Directions to make the Recipe" required/>
                    <input type="submit" value="Save Recipe" />  
                </form>
            </div>
        )
    }
}

export default RecipeForm