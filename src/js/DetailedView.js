const m = require('mithril');
let Log = require('./Log');
let item;

item = {author: 'Kees', log_entry_text: 'Hello world'};

module.exports = {
  oninit: function() {
    let id = m.route.param().id;
    Log.getSingle(id).then(function(data) {
      item = data[0];
      // let author = item[0].author;
    });// .catch(function( err) {});
    // function(error){
    // })
  },
  view: function() {
    return [
      m(`.user-list-item`,
        `Log title: ${item.title}
      Date: ${item.created}
      Run: ${item.run}
      Run id: ${item.run_id}
      Subsystem: ${item.subsystem}
      Type: ${item.type}
      Class: ${item.class}
      Log: ${item.log_entry_text}
      
      Follow-up: ${item.follow_ups}
      Author: ${item.author.trim()}
    `)
    ];
  }
};


