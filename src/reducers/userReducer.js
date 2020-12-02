const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET-USER' : {
            return {...action.payload}
        }
        case 'REMOVE-USER' : {
            return {}
        }
        default : return {...state}
    }
}