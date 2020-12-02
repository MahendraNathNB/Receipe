import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import './styles.css'
import { startLogin } from '../../actions/userAction'

const Login = (props) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const redirect = () => { 
            props.history.push('/')
        }
        props.dispatch(startLogin(data, redirect))
    }

    return(
        <div className="text-center">
            <Row className="justify-content-md-center">
            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                
                <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
                
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" id="inputEmail" className="form-control" name="email" ref={register({ required: true})} autoFocus />
                <br/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" name="password" ref={register({ required: true})}/>
                <br/><br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign-in</button>
            </form>
            </Row>
        </div>
    )
    
}
export default connect()(Login)