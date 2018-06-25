const m = require('mithril');

module.exports = {
  view: function(vnode) {
    return m('main.layout', [
      m('nav.menu', [
        m('a[href=\'/list\']', {oncreate: m.route.link}, 'Users'),
        m('a[href=\'/adduser\'].label', {oncreate: m.route.link}, 'Add User')
      ]),
      m('section', vnode.children)
    ]);
  }
};
