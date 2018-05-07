const m = require('mithril');

let Log = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/all/entries?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNTY4MjQ3NiwiZXhwIjoxNTI1NzY4ODc2LCJpc3MiOiJvMi11aSJ9.fVH_Jv0mOHWWbIvoDndun8uDgybEZKJprE6aEAZEu1g',
      withCredentials: true
    })
      .then(function(result) {
        Log.list = result;
      });
  },
  addData: function(data) {
    return m.request({
      method: 'POST',
      /* eslint max-len: ["error", { "ignoreUrls": true }]*/
      url: 'http://localhost:8290/api/post/entry/data?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNTY4MjQ3NiwiZXhwIjoxNTI1NzY4ODc2LCJpc3MiOiJvMi11aSJ9.fVH_Jv0mOHWWbIvoDndun8uDgybEZKJprE6aEAZEu1g',
      data: data,
      withCredentials: true
    })
      .then(function(result) {
        Log.list = result;
        // console.log(result);
      });
  }
};

module.exports = Log;
