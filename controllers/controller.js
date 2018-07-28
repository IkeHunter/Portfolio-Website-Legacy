module.exports = function(app, db, passport){

app.get('/', (req,res)=>{
  res.render('home');
})





/****** Login and Signup *******/

// handling sign up form
app.post('/signup', passport.authenticate('local-signup',  {
     successRedirect: '/info' ,
     failureRedirect: '/'}
    )
  );

// display signin
app.get('/signin',function(req,res) {
     res.render('signin', {message: req.flash('loginMessage')});
  });

// handling sign in form
app.post('/signin', passport.authenticate('local-signin',  {
     successRedirect: '/home',
     failureRedirect: '/'}
    )
  );

// destroying session
app.get('/logout',function(req,res){
	req.session.destroy(function(err) {
  res.redirect('/');
	});
});

};
function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();

      res.redirect('/signin');
  }
