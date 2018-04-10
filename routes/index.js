const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/' , storeController.homePage); // Controller inbound
router.get('/add' , storeController.addStore); // Controller inbound
router.post('/add', storeController.createStore);
/* router.get('/' , storeController.myMiddleware, storeController.homePage); // Controller inbound */







//(req, res) => {
  //const wes ={name:'wes', age: 100, cool: true};
  /* res.send('Hey! It works!'); */
  /* res.json(wes); */
  /* res.send(req.query.name); */
  /* res.json(req.query); */
  //res.render('hello', {
    //name: 'wes', 
    // dog: 'snickers'
    //dog: req.query.dog,
    //title: 'I love food'
  //});
//});

//router.get('/reverse/:name', (req, res) => {
  /* res.send('it works!'); */
 // const reverse = [...req.params.name].reverse().join('');
  //res.send(reverse);
//});

module.exports = router;
