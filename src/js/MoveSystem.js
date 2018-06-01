const m = require('mithril'); // Change this to checkboxes

module.exports = {
  view: function() {
    return [
      m('div[style = display: inline-block; margin: 10px 70px 20px 11px;]', [
        m('select[multiple = multiple][size = 10]', [
          m('option', 'Henry hound'),
          m('option', 'Harry'),
          m('option', 'Kees'),
          m('option', 'Hanna'),
          m('option', 'Klaas'),
          m('option', 'Nina'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first')
        ]),
        m('button', 'Move out')
      ]),
      m('div[style = display: inline-block; margin: 10px 70px 20px 11px;]', [
        m('select[multiple = multiple][size = 10]', [
          m('option', 'Henry hound'),
          m('option', 'Harry'),
          m('option', 'Kees'),
          m('option', 'Hanna'),
          m('option', 'Klaas'),
          m('option', 'Nina'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first'),
          m('option', 'first')
        ]),
        m('button', 'Move in')
      ])
    ];
  }
};
