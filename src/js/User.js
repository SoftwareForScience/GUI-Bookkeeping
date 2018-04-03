let m = require('mithril');

let User = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users?offset=0&limit=11',
      withCredentials: true
    })
      .then(function(result) {
        User.list = result.data;
      });
  },

  current: {},
  load: function(id) {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
      withCredentials: true
    })
      .then(function(result) {
        User.current = result;
      });
  },

  save: function() {
    return m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + User.current.id,
      data: User.current,
      withCredentials: true
    });
  },

  add: function(data) {
    return m.request({
      method: 'POST',
      url: 'https://rem-rest-api.herokuapp.com/api/users/',
      data: data, // send first name, last name and automaticalliy add id
      withCredentials: true
    })
    // .then(function(result) {
    // console.log(result)
    ;

    // return m.request({
    //   method: 'GET',
    //   url: 'https://rem-rest-api.herokuapp.com/api/users/',
    //   withCredentials: true
    // })
    //   .then(function(result) {
    //     // console.log(result);
    //   })
    // ;
  }

};
module.exports = User;


