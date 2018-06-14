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
      // m('button', {href: '#!logList'}, 'Back to Log list')
    ]);
  }
};
// [
//   m('', 'Log sucessfully added! Do you want to upload files regarding this log?'),
//   m('br'),
//   m('form', [
//     m('label', 'Choose a file to upload'),
//     m('br'),
//     m('input[type = file]'),
//     m('button.submit-button[type = submit]', 'Submit')
//   ]
//   )];
