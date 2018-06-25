const m = require('mithril');
const Log = require('./Log');

module.exports = {
  view: function() {
    return m('form', {
      onsubmit: function(e) {
        e.prefentDefault();
        Log.addFile(data, id);
      }
    },
    [
      m('label', 'You succesfully uploaded the log!'),
      m('br'),
      m('a.button', {href: '#!/logList'}, 'Go to Log List')
      // m('button', {href: '#!logList'}, 'Back to Log list')
    ]);
  }
};

