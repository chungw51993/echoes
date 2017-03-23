var LocalStrategy = require('passport-local');
var users = require('../../db/controllers/users');
var util = require('../utilities');

module.exports = function(passport) {

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {

    users.getUser(username)

      .then(user => {

        if (!user) {
          return done(null, false);
        }

        return util.checkPasswordAsync(password, user.password)
          .then(match => {
            if (match) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
      })

      .catch(err => {
        console.log('Signup Error: ', err);
        done(err);
      });
  }));
};
