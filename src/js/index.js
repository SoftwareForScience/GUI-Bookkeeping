const m = require('mithril');
require('../sass/styles.scss');
const LogList = require('./LogList');
const CreateLog = require('./CreateLog');

const root = document.body;

m.route(root, '/logList', {'/logList': LogList, '/createLog': CreateLog} );


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
