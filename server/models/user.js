var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: String,
    polls : [{type: Schema.Types.ObjectId, ref: 'Topic'}],
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);