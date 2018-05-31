const m = require('mithril');

module.exports = {
  view: function() {
    return [
      m('nav.navbar navbar-default[id = navigation][style=background-color: #39A6EF;]', [
        m('div.container-fluid', [
          m('div.navbar-header', [
            m('a.navbar-brand', {href: '#!/welcomeScreen'}, 'Alice')
          ]),
          m('ul.nav navbar-nav', [
            m('li', m('a', {href: '#!/logList'}, 'Log list')),
            m('li', m('a', {href: '#!/createLog'}, 'Create log')),
            m('li', m('a', {href: '#!/fileUpload'}, 'File upload')),
            m('li', m('a', {href: '#!/view'}, 'Move'))
          ])
        ])
      ])
    ];
  }
};
