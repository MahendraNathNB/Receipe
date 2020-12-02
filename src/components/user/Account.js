import React from 'react'
import { connect } from 'react-redux'


function Account(props){
    return(
        <div>
            { props.user ? 
            <div style={{color:'white',textAlign:'center'}}>
                <h3>Username : {props.user.username}</h3>
                <h3>Email : ({props.user.email})</h3>
            </div> : '' }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Account)