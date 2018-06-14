let currentUser = null;
module.exports = {

  logInUser: function(user) {
    currentUser = user;
  },

  getUser: function() {
    return currentUser;
  },
};
