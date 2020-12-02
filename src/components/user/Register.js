 import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { startRegister } from '../../actions/userAction'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username,
            email,
            password
        }
        const redirect = () => {
            return this.props.history.push('/login')
        }
        props.dispatch(startRegister(formData,redirect))
    }
    
    return(
            <div className="text-center">
                <Row className="justify-content-md-center">
                    <form className="form-signin" onSubmit={handleSubmit}>
                        
                        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                        <label htmlFor="inputUsername" className="sr-only">Username</label>
                        <input type="text" id="inputUsername" className="form-control" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" required autoFocus />
                        <br/>
                        
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="text" id="inputEmail" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" required />
                        <br/>

                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
                        <br/><br/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign-Up</button>
                    </form>
                </Row>
            </div>
    )
    
}
export default connect()(Register)