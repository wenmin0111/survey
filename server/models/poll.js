var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = new mongoose.Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option1_count: Number,
    option2_count: Number,
    option3_count: Number,
    option4_count: Number,
    username:String,
     _user:{type:Schema.Types.ObjectId, ref:"User"},
}, {timestamps: true})
var Poll = mongoose.model('Poll', PollSchema);