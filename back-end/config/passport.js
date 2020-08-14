const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const User = connection.models.User;
const validPassword = require('../lib/passwordUtils').validPassword;

const customFields = {
  usernameField: 'username',
  passwordField: 'password'
};

const verifyCallback = (username, password, done) => {

  User.findOne({ username: username })
      .then((user) => {
          console.log(username)
          if (!user) { 
            console.log("No user found")  
            return done(null, false) 
          }
          
          const isValid = validPassword(password, user.hash, user.salt);
          
          if (isValid) {
            console.log("Login Success!")
              return done(null, user);
          } else {
              console.log("Wrong Password")
              return done(null, false);
          }
      })
      .catch((err) => { 
          console.log(err)  
          done(err);
      });

}

const strategy  = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("serializeing " + user.id)
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  console.log("Deserializing " + userId)
  User.findById(userId)
      .then((user) => {
          done(null, user);
      })
      .catch(err => done(err))
});
