var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
module.exports = {
    index: function(req,res){
       Poll.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
    },
    findOne: function(req,res){
       console.log("POLL FIND ONE", req.body);
       Poll.findOne({_id:req.body.id})
       .then(data=>{
           console.log(data);
           res.json(data);
       })
       .catch(err=>{
           console.log("POLL Find One Error: ", err);
       })
   },
    new: function(req, res){
       console.log("poll body: ", req.body);
       Poll.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in poll controller -create!!');
       })
   },
   delete: function(req, res){
       console.log("poll body need to delete: ", req.body);
       Poll.remove({_id:req.body.id})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in poll controller -delete!!');
       })
   },
   vote1: function(req,res){
       console.log("Vote1 Up: ", req.body);
       Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option1_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   },
   vote2: function(req,res){
       console.log("Vote2 Up: ", req.body);
       Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option2_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   },
   vote3: function(req,res){
       console.log("Vote3 Up: ", req.body);
       Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option3_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   },
   vote4: function(req,res){
       console.log("Vote4 Up: ", req.body);
       Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option4_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   },
}