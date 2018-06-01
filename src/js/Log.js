const m = require('mithril');

let Log = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/all/entries?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzc2Mjc5MCwiZXhwIjoxNTI3ODQ5MTkwLCJpc3MiOiJvMi11aSJ9.iB9RiHMnErmlkCHTy5LzH4UmtMqgZ20-b4iD9hfS7XU'
      // withCredentials: true
    }).then(function(data) {
      Log.list = data;
    }/* , function(reason) {
      // console.log(reason);
    }*/
    );
  },
  addData: function(data) {
    return m.request({
      method: 'POST',
      /* eslint max-len: ["error", { "ignoreUrls": true }]*/
      url: 'http://localhost:8290/api/post/entry/data?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzc2Mjc5MCwiZXhwIjoxNTI3ODQ5MTkwLCJpc3MiOiJvMi11aSJ9.iB9RiHMnErmlkCHTy5LzH4UmtMqgZ20-b4iD9hfS7XU',
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
      url: 'http://localhost:8290/api/single/entry/' + id + '?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzc2Mjc5MCwiZXhwIjoxNTI3ODQ5MTkwLCJpc3MiOiJvMi11aSJ9.iB9RiHMnErmlkCHTy5LzH4UmtMqgZ20-b4iD9hfS7XU'
    });
  }
};

module.exports = Log;
