import axios from "../config/axios"

export const startRegister = (data) => {
    return (dispatch) => {
        axios.post('/users/register', data)
            .then( res => {
                console.log(res)
            })
    }
}

export const startLogin = (loginData, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', loginData)
            .then( res => {
                localStorage.setItem('auth-token', res.data.token)
                dispatch(startGetUser())
                redirect()
            })
    }
}

const setUser = (data) => {
    return {
        type : 'SET-USER', payload : data
    }
}

export const startGetUser = (token) => {
    return (dispatch) => {
        axios.get('/users/account',{
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
        .then( res => {
            dispatch(setUser(res.data))
        })
    }
}

const removeUser = () => {
    return {
        type : 'REMOVE-USER'
    }
}

export const startLogout = (redirect) => {
    return (dispatch) => {
        axios.delete('/users/logout',{
            headers : {
                'x-auth' : localStorage.getItem('auth-token')
            }
        })
        .then( res => {
            dispatch(removeUser())
            console.log(res.data)
            localStorage.removeItem('auth-token')
            redirect()
        })
    }
}