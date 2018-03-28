var m = require("mithril");
require('../sass/styles.scss')
const MartinsComponent = require("./MartinsComponent");
const SplashScreen = require("./SplashScreen");
const UserList = require("./UserList");
const UserForm = require("./UserForm");
const Layout = require("./Layout");

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
  }
});

// m.mount(root, UserList);
// m.route(root, "/splash", { "/splash": SplashScreen, "/hello": MartinsComponent } );
