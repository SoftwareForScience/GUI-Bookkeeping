const m = require('mithril');

module.exports = {
  view: function() {
    return [
      m('table.table', [
        m('tr.tr', [
          m('th.th', 'Run'),
          m('th.th', 'Title'),
          m('th.th', 'Author')
        ]),
        m('tr.tr', [
          m('td.td', '2'),
          m('td.td', 'End shift'),
          m('td.td', 'Pietje Puk' )
        ])
      ])
    ];
  }
};
