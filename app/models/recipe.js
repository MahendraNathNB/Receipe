const mongoose = require("mongoose")
const Schema = mongoose.Schema
const recipeSchema = new Schema ({
	name : {
		type : String,
		required : true,
		unique : true,
		minlength : 3,
		maxlength : 80
	},
	description : {
		type : String,
		required : true,
		minlength : 5,
		maxlength : 300
	},
	ingredients : [
	{
		type : String,
		required : true
	}],
	directions : {
		type : String,
		// required : true
	},
	author : {
		type : Schema.Types.ObjectId,
		ref : 'User',
		required : true
	}
})

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe 