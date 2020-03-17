const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   
    username:{
        type: String,
    },
    first_name :{
        type: String
    },
    last_name :{
        type: String
    },
    phone_no :{
        type: String
    }   
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);