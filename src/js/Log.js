const m = require('mithril');

let Log = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'http://localhost:8290/api/all/entries?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzY3MDM3NSwiZXhwIjoxNTI3NzU2Nzc1LCJpc3MiOiJvMi11aSJ9.3vzNsIsOixnBHaB35HjOTTfwpx--V90R9fN-QwIQDAo'
      // withCredentials: true
    });/* .then(function(data) {
      Log.list = data;
    }, function(reason) {
      // console.log(reason);
    }
    );*/
  },
  addData: function(data) {
    return m.request({
      method: 'POST',
      /* eslint max-len: ["error", { "ignoreUrls": true }]*/
      url: 'http://localhost:8290/api/post/entry/data?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzY3MDM3NSwiZXhwIjoxNTI3NzU2Nzc1LCJpc3MiOiJvMi11aSJ9.3vzNsIsOixnBHaB35HjOTTfwpx--V90R9fN-QwIQDAo',
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
      url: 'http://localhost:8290/api/single/entry/' + id + '?personid=0&name=Anonymous&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJBbm9ueW1vdXMiLCJhY2Nlc3MiOjAsImlhdCI6MTUyNzY3MDM3NSwiZXhwIjoxNTI3NzU2Nzc1LCJpc3MiOiJvMi11aSJ9.3vzNsIsOixnBHaB35HjOTTfwpx--V90R9fN-QwIQDAo'
    });
  }
};

module.exports = Log;
