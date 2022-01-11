const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//For credentials
require('dotenv').config();

const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();
//connect to mongoDB
const PORT = process.env.PORT || 3000;
// listen for requests
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology:true})
.then((result) => app.listen(PORT,() =>
{
  console.log("connected");
}))
.catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
 
app.get('/', (req, res) => {
 res.redirect('/blogs');
});
/*TO BE F+DELETE
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
*/

//blog routes

app.use(blogRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});