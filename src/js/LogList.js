let m = require('mithril');
let Log = require('./Log');

module.exports = {
  oninit: Log.loadList,
  view: function() {
    return m('.user-list', Log.list.map(function(log) {
      /* eslint max-len: ["error", { "ignoreStrings": true }]*/
      return m('.user-list-item', 'Log title: ' + log.title + ' ' +'Author: ' + log.author + ' ' +'Log id: ' + log.run_id);
    }), [
      m('a.button', {href: '#!/createLog'}, 'Create Log')

    ]);
  }
};
