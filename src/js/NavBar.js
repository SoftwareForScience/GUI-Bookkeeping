const m = require('mithril');

module.exports = {
  // oncreate: dontShow,
  view: function() {
    return [
      /* eslint max-len: ["error", { "ignoreStrings": true }]*/
      m('nav[class= navbar navbar-expand-lg navbar-light bg-light][id = navigation][style = background-color: #ef8239 !important;]', [
        m('a[class= navbar-brand]', {href: '#!/welcomeScreen'}, [
        ], 'ALICE'),
        m('button[class = navbar-toggler][type=button][data-toggle=collapse][data-target=#navbarSupportedContent][aria-controls=navbarSupportedContent][aria-expanded=false][aria-label=Toggle navigation]', [
          m('span[class= navbar-toggler-icon]')
        ]),
        m('div[class=collapse navbar-collapse][id=navbarSupportedContent]', [
          m('ul[class= navbar-nav mr-auto]', [
            m('li[class=nav-item active]', [
              m('a[class= nav-link]', {href: '#!/welcomeScreen'}, [
                m('span[class= sr-only]', '(current)')
              ], 'Home')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/logList'}, 'Log list')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/createLog'}, 'Create log')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/fileUpload'}, 'File Upload')
            ]),
            m('li[class= nav-item]', [
              m('a[class= nav-link]', {href: '#!/view'}, 'Move')
            ])
          ])
        ])
      ])
    ];
  }
};
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

