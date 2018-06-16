const m = require('mithril');
const token = '?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyOTE2NTIzNCwiZXhwIjoxNTI5MjUxNjM0LCJpc3MiOiJvMi11aSJ9.52mlgTUJ-ydDNNMFd1zcPFSWaV06Kl1cRzgsTHTFlRs';

let Log = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/all/entries/' + token
      // withCredentials: true
    }).then(function(data) {
      Log.list = data;
    }, function(reason) {
      console.log(reason);
    }
    );
  },
  addData: function(data) {
    return m.request({
      method: 'POST',
      /* eslint max-len: ["error", { "ignoreUrls": true }]*/
      url: 'http://localhost:8290/api/post/entry/data' + token,
      //   headers: {
      //       'Content-Type' : 'application/json'
      //   },
      data: data
      // withCredentials: true
    });
  },

  // addFile: function(id, data) {

  //   return m.request({
  //     method: 'POST',
  //     url: 'http://localhost:8290/api/upload/' + id + '?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyODkxNTc4NSwiZXhwIjoxNTI5MDAyMTg1LCJpc3MiOiJvMi11aSJ9.WT72Jdq_z9KLEGLNpOO8krdFa8hPn6Dr-F8wKfQMP_k',
  //     data: {file: data}
  //   });
  // },

  // getToken: function() {
    
  //   return new Promise((res, rej) => {
  //     m.request({
  //     method: 'GET',
  //     url: 'http://localhost:8290/',
  //     extract: function (xhr) {
  //       const URL = xhr.responseURL;
  //       const REGEX = /token=([A-Z|a-z|0-9|.|-]*)/; // takes the value after token= 
  //       const TOKEN = URL.match(REGEX)[1];
  //       console.log(TOKEN);
  //       res(TOKEN)
  //       return {xhr}}
  //     });
  //   });
  // }, 

  getSingle: function(id) {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/single/entry/' + id + token
    });
  }
};

module.exports = Log;
