const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET-RECIPES' : {
            return [...action.payload]
        }
        case 'ADD-RECIPE' : {
            return [...state,action.payload]
        }
        case 'UPDATE-RECIPE' : {
            return state.map(recipe=>{
                if(recipe._id === action.payload._id){
                    return {...action.payload}
                } else {
                    return {...recipe}
                }
            })
        }
        case 'REMOVE-RECIPE' :  {
            return state.filter(recipe=>{
                return recipe._id !== action.payload._id
            })
        }
        default : return [...state]
    }
}