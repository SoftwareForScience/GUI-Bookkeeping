const m = require('mithril'); // Change this to checkboxes

module.exports = {
  view: function() {
    return [
      m('div[style = display: inline-block; margin: 10px 70px 20px 11px;]', [
        m('p','Your subsystem:'),
        m('select[multiple = multiple][size = 10]', [
          m('option', 'Henry hound'),
          m('option', 'Harry'),
          m('option', 'Kees'),
          m('option', 'Hanna'),
          m('option', 'Klaas'),
          m('option', 'Nina'),
          m('option', 'Harry'),
          m('option', 'Klaas'),
          m('option', 'Henry'),
          m('option', 'Ali'),
          m('option', 'Mike'),
          m('option', 'Hanna'),
          m('option', 'Leo')
        ]),
        m('button', 'Move out')
      ]),
      m('div[style = display: inline-block; margin: 10px 70px 20px 11px;]', [
        m('p', 'People:'),
        m('select[multiple = multiple][size = 10]', [
          m('option', 'Henry hound'),
          m('option', 'Harry'),
          m('option', 'Kees'),
          m('option', 'Hanna'),
          m('option', 'Klaas'),
          m('option', 'Nina'),
          m('option', 'Hanna'),
          m('option', 'Leo'),
          m('option', 'Frank'),
          m('option', 'Hans'),
          m('option', 'Karel'),
          m('option', 'Nina'),
          m('option', 'Maarten')
        ]),
        m('button', 'Move in')
      ]),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
    ];
  }
};
