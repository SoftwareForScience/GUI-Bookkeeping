const m = require('mithril');

module.exports = {
  oncreate: dontShow,
  view: function() {
    return [
      m('nav.navbar.navbar-default [id = navigation][style=background-color: #ef8239;]', [
        m('div.container-fluid', [
          m('div.navbar-header', [
            m('a.navbar-brand', {href: '#!/welcomeScreen'}, 'Alice')
          ]),
          m('ul.nav navbar-nav', [
            m('li', m('a', {href: '#!/logList'}, 'Log list')),
            m('li', m('a', {href: '#!/createLog'}, 'Create log')),
            m('li', m('a', {href: '#!/fileUpload'}, 'File upload')),
            m('li', m('a', {href: '#!/view', id: 'hello'}, 'Move'))
          ])
        ])
      ])
    ];
  }
};

/** Doesn't show navbar at the login page (doesn't completely work yet)
 */
function dontShow() {
  let nav = document.getElementById('navigation');
  if (m.route.get === '/login') {
    nav.style.visibility = 'hidden';
  } else {
    nav.style.display = 'visible';
  }
}
