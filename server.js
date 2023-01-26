var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    // res.send("Hello world! by express");
    res.redirect('index.html')
});


// app.use(function(req, res, next){
//     res.status(404);
  
//     res.format({
//       html: function () {
//         res.render('404', { url: req.url })
//       },
//       json: function () {
//         res.json({ error: 'Not found' })
//       },
//       default: function () {
//         res.type('txt').send('Not found')
//       }
//     })
//   });

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).send('Error 404');
  });

app.listen(8080)

console.log(`Server is listening for requests on port 8080`);

