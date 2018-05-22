const m = require('mithril');
module.import = '../sass/styles.scss';
const LogList = require('./LogList');
const CreateLog = require('./CreateLog');
const AppBase = require('./AppBase');
const welcomeScreen = require('./Welcome');
const fileUpload = require('./FileUpload');
const detailedView = require('./DetailedView');

const headerDiv = document.getElementById('header');
const contentDiv = document.getElementById('content');

m.mount(headerDiv, AppBase);
m.route(contentDiv, '/logList',
  {
    '/logList': LogList,
    '/createLog': CreateLog,
    '/welcomeScreen': welcomeScreen,
    '/fileUpload': fileUpload,
    '/detailedView': detailedView
  } );


// m.route(root, '/list', {
//   '/list': {
//     render: function() {
//       return m(Layout, m(UserList));
//     }
//   },
//   '/edit/:id': {
//     render: function(vnode) {
//       return m(Layout, m(UserForm, vnode.attrs));
//     }
//   },
//   '/adduser': {
//     render: function() {
//       return m(Layout, m(UserCreation));
//     }
//   }
// });
