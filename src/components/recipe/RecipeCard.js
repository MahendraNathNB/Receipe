import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import Logo from '../../foodImage.jpg'
import { connect } from 'react-redux';
import { startRemoveRecipe } from '../../actions/recipeAction';

function RecipeCard(props){
    const handleDelete = (id) => {
        props.dispatch(startRemoveRecipe(id))
    }
    return(
        <div className="mb-4">
            {props.recipe.ingredients ? 
            <div>
                <Link to={'/recipes/' + props.recipe._id}>
                    <Card border="dark"  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Logo} width="128" height="128"/>
                    <Card.Body>
                        <Card.Title>{props.recipe.name}</Card.Title>
                        <Card.Subtitle style={{color : 'green' }}>Ingredients : {props.recipe.ingredients.join(',')}</Card.Subtitle>
                        <Card.Text>
                        {props.recipe.description}
                        </Card.Text>
                        {/* <h5>Author : {props.recipe.author.username || 'You' }</h5> */}
                    </Card.Body>
                    </Card>
                </Link>
                { props.author ?
                    <div>
                        <Link to={'/myrecipes/edit/'+ props.recipe._id}>
                            <EditOutlinedIcon className="m-3" style={{ fontSize: 30 }} color="primary" />
                        </Link>
                        <Link to='#' onClick={()=>handleDelete(props.recipe._id)}>    
                            <DeleteOutlinedIcon className="m-3" style={{ fontSize: 30 }} color="primary" />
                        </Link> 
                    </div>
                : ''}
            </div>:''}
        </div>
    )
}

export default connect()(RecipeCard)
