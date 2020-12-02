const Recipe = require('../models/recipe')

module.exports.list = (req, res) => {
	Recipe.find().populate('author','username')
		.then( recipes =>{
			res.json(recipes)
		})
		.catch( err => {
			res.json(err)
		})
}

module.exports.create = (req,res) => {
	const body = req.body
	const recipe = new Recipe(body)
	recipe.save()
		.then( recipe => {
			res.json(recipe)
		})
		.catch( err => {
			res.json(err)
		})
}

module.exports.update = (req,res) => {
    const id = req.params.id
	const body = req.body
	console.log('update',body)
    Recipe.findByIdAndUpdate(id,body,{new:true, runValidators : true})
        .then(ticket=>{
            if(ticket){
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
	const id = req.params.id
	Recipe.findByIdAndDelete(id)
		.then(recipe => {
			res.json(recipe)
		})
		.catch(err=>{
			res.json(recipe)
		})
}
