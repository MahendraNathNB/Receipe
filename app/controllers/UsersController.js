const User = require('../models/user')

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then( user => {
            const {_id,username,email} = user
           	res.json({_id,username,email})
        })
        .catch( err => { 
            res.json(err)
        })
}

module.exports.login = ( req, res) => {
    const body = req.body
    User.findByCredentials( body.email, body.password)
        .then( user => {
            return user.generateToken()
        })
        .then(function(token){
            res.send({token})
        })
        .catch( err => {
            res.send(err)
        })
}

module.exports.account = (req, res) => {
    const {_id,username,email} = req.user
    res.send( {_id,username,email} )
}

module.exports.logout = (req, res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull : { tokens : { token : token}} })
        .then(()=>{
            res.send({notice : 'successfully logged out'})
        })
        .catch( err => {
            res.send(err)
        })
}