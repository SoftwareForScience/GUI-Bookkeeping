const m = require('mithril');
let Log = require('./Log');
let item;

item = {author: 'Kees', log_entry_text: 'Hello world'};

module.exports = {
  oninit: function() {
    let id = m.route.param().id;
    Log.getSingle(id).then(function(data) {
      console.log(data);
      item = data[0];
    }, function(error) {
      console.log('hi');
    });
  },
  view: function() {
    return [
      m(`table.user-list-item`, [
        m('div', `Log title: ${item.title}`),
        m('div', `Date: ${item.created}`),
        m('div', `Run: ${item.run}`),
        m('div', `Run id: ${item.run_id}`),
        m('div', `Subsystem: ${item.subsystem}`),
        m('div', `Type: ${item.type}`),
        m('div', `Class: ${item.class}`),
        m('br'),
        m('div[style=overflow-wrap: break-word;]', `Log: ${item.log_entry_text}`),
        m('br'),
        m('div', `Follow-up: ${item.follow_ups}`),
        m('div', `Author: ${item.author}`)
      ]
        //     `Log title: ${item.title}
        //   Date: ${item.created}
        //   Run: ${item.run}
        //   Run id: ${item.run_id}
        //   Subsystem: ${item.subsystem}
        //   Type: ${item.type}
        //   Class: ${item.class}
        //   Log: ${item.log_entry_text}
        //   Follow-up: ${item.follow_ups}
        //   Author: ${item.author}
        // `
      ),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
    ];
  }
};


