let currentUser = null;
module.exports = {
  logInUser: function(user) {
    document.cookie = 'name=' + user.name;
    document.cookie = 'roles=' + user.roles;
    currentUser = user;
  },

  getUser: function() {
    let cookie = {name: "", roles: ""};

    if(currentUser === null) {
      document.cookie.split(/\s*;\s*/).forEach((pair) => {
      pair = pair.split(/\s*=\s*/);
      cookie[pair[0]] = pair[1];
    });
    currentUser = cookie;
    }
    return currentUser;
  },
};
