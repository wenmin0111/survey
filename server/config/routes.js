var usercontroller = require('../controllers/users.js');
var pollcontroller = require('../controllers/polls.js');
var path = require('path');
module.exports = function(app) {
   // Routes
   // Root Request
   app.get('/users', usercontroller.index);
   app.post('/getuser', usercontroller.findOne);
   app.get('/polls', pollcontroller.index);
   app.post('/newpoll', pollcontroller.new);
   app.post('/getpoll', pollcontroller.findOne);
   app.post('/vote1', pollcontroller.vote1);
   app.post('/vote2', pollcontroller.vote2);
   app.post('/vote3', pollcontroller.vote3);
   app.post('/vote4', pollcontroller.vote4);
   app.post('/deletepoll', pollcontroller.delete);
   
   


   app.post('/new', (req, res)=>{
       usercontroller.new(req, res);
       console.log("parse new to routes success", req.body);
   });

   app.all('*', (req, res) => {
       res.sendFile(path.resolve('public/dist/index.html'));
   });
}