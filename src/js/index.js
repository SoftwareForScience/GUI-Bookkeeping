const m = require('mithril');
require('../sass/styles.scss');
const UserList = require('./UserList');
const UserForm = require('./UserForm');
const Layout = require('./Layout');
const UserCreation = require('./UserCreation');

const root = document.body;


m.route(root, '/list', {
  '/list': {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  '/edit/:id': {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  },
  '/adduser': {
    render: function() {
      return m(Layout, m(UserCreation));
    }
  }
});
