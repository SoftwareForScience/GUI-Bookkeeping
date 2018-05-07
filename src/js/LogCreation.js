const m = require('mithril');

module.exports = {
  view: function() {
    return [
      m('input.title.h1[placeholder = Log Title]'),
      m('br'),
      m('br'),
      m('div.loginfo', 'Hier tekst met log spul'),
      m('br'),
      m('textarea.inputfield[placeholder = Type text here]'),
      m('br'),
      m('br'),
      m('button.button[type = submit]', {align: 'center;'}, 'Create Log'),
      m('br'),
      m('br')
    ];
  }
};
