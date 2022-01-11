const express = require('express');
//new instance of ba
const Blog = require('../models/blog');
const router = express.Router();



router.get('/blogs' , (req,res) => {
    Blog.find()
     .then((result) => {
       res.render('index' , {title: 'All Blogs', blogs:result})
    })
     .catch((err) => {
       console.log(err);
     })
  
  })
  //POST REQ
  router.post('/blogs' ,(req,res) =>{
   const blog = new Blog(req.body);
   blog.save()
    .then((result) =>{
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    })
  })
  
  //
  router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        res.render('404', {title:'OOPS!! Blog not found'});
      });
  });
  
  router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  //

  module.exports = router;