const m = require('mithril');
const UserService = require('./UserService');
module.exports = {
  view: function(vnode) {
    return [
      /* eslint max-len: ["error", { "ignoreStrings": true }]*/
      m('nav[class= navbar navbar-expand-lg navbar-dark bg-dark][id = navigation][style = background-color: #ef8239 !important; background: linear-gradient(to bottom right, #d62631, #ef8239);]', [
        m('a[class= navbar-brand]', {href: '#!/welcomeScreen'}, [
        ], 'ALICE'),
        m('button[class = navbar-toggler][type=button][data-toggle=collapse][data-target=#navbarSupportedContent][aria-controls=navbarSupportedContent][aria-expanded=false][aria-label=Toggle navigation]', [
          m('span[class= navbar-toggler-icon]')
        ]),
        m('div[class=collapse navbar-collapse][id=navbarSupportedContent]', [
          m('ul[class= navbar-nav mr-auto]', [
            m('li[class=nav-item active]', [
              m('a[class= nav-link]', {href: '#!/welcomeScreen', onclick: $('.navbar-collapse').collapse('hide')}, [
                m('span[class= sr-only]', '(current)')
              ], 'Home')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/logList', onclick: $('.navbar-collapse').collapse('hide')}, 'Log list')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/createLog', onclick: $('.navbar-collapse').collapse('hide')}, 'Create log')
            ]),
            UserService.getUser().roles === 'subsystemruncoordinator' ?
              m('li[class= nav-item]', [
                m('a[class= nav-link]', {href: '#!/view', onclick: $('.navbar-collapse').collapse('hide')}, 'Move')
              ]) : '',
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/logIn', onclick: $('.navbar-collapse').collapse('hide')}, 'Log out')
            ])
          ])
        ])
      ]),
      m('section', vnode.children)
    ];
  }
};
// $('.navbar-nav>li>a').on('click', function() {
//   $('.navbar-collapse').collapse('hide');
// });
/** Doesn't show navbar at the login page (doesn't completely work yet)
 */
// function dontShow() {
//   console.log('hallo');
//   let nav = document.getElementById('navigation');
//   if (m.route.get = '/login') {
//     nav.style.visibility = 'hidden';
//   } else {
//     nav.style.display = 'visible';
//   }
// }

