const m = require('mithril');

let Log = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/all/entries?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyODE4OTgwMiwiZXhwIjoxNTI4Mjc2MjAyLCJpc3MiOiJvMi11aSJ9.jjpQLVwGXHemgHFseGvJFTPhWr4tg0TKFYb1OBwRE3w'
      // withCredentials: true
    });
    // .then(function(data) {
    //   Log.list = data;
    // }, function(reason) {
    //   // console.log(reason);
    // }
    // );
  },
  addData: function(data) {
    return m.request({
      method: 'POST',
      /* eslint max-len: ["error", { "ignoreUrls": true }]*/
      url: 'http://localhost:8290/api/post/entry/data?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyODE4OTgwMiwiZXhwIjoxNTI4Mjc2MjAyLCJpc3MiOiJvMi11aSJ9.jjpQLVwGXHemgHFseGvJFTPhWr4tg0TKFYb1OBwRE3w',
      //   headers: {
      //       'Content-Type' : 'application/json'
      //   },
      data: data
      // withCredentials: true
    });
  },

  // getToken: function() {
  //   return m.request({
  //     method: 'GET',
  //     url: 'http://localhost:8290'
  //   }). then(function(result) {},
  //     function(wentWrong) {
  //       // console.log(m.route.get());
  //       // console.log(`a ${wentWrong}`);
  //     });
  // }, Try for later

  getSingle: function(id) {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/single/entry/' + id + '?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyODE4OTgwMiwiZXhwIjoxNTI4Mjc2MjAyLCJpc3MiOiJvMi11aSJ9.jjpQLVwGXHemgHFseGvJFTPhWr4tg0TKFYb1OBwRE3w'
    });
  }
};

module.exports = Log;
