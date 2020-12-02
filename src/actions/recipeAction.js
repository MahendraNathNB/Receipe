import axios from "../config/axios"

const setRecipes = (data) => {
    return {
        type : 'SET-RECIPES', payload : data
    }
}

export const startGetRecipes = () => {
    return (dispatch) => {
        axios.get('/recipes',{
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
            .then( res => {
                dispatch(setRecipes(res.data))
            })
    }
}

const addRecipe = (data) => {
    return {type : 'ADD-RECIPE', payload : data}
}

export const startAddRecipe = (data,redirect) => {
    return (dispatch) => {
        axios.post('/recipes',data,{
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
            .then( res => {
                dispatch(addRecipe(res.data))
                redirect()
            })
    }
}

const updateRecipe = (data) =>{
    return {type : 'UPDATE-RECIPE', payload : data}
}

export const startUpdateRecipe = (id, data, redirect) => {
    return dispatch => {
        axios.put('/recipes/' + id, data,{
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
        .then(res => {
            dispatch(updateRecipe(res.data))
            redirect()
        })
    }
}

const removeRecipe = (data) => {
    return {type : 'REMOVE-RECIPE', payload : data}
}

export const startRemoveRecipe = (id) => {
    return (dispatch) => {
        axios.delete('/recipes/' + id, {
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
            .then( res => {
                dispatch(removeRecipe(res.data))
            })
    }
}

