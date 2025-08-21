const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
      description:{
        type:String,
        required: true
    },
      status:{
        type:String,
        default : 'pending'
    },
     userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
     }


})

const items = mongoose.model('items', itemsSchema)

module.exports = items