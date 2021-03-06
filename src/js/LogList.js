let m = require('mithril');
let Log = require('./Log');

module.exports = {
  oninit: function() {
    Log.loadList();
  },
  view: function() {
    return m('.user-list', Log.list.map(function(log) {
      // /*eslint max-len: ["error", { "ignoreStrings": true }]*/
      return m(`.user-list-item[value='${log.run_id}']`,
        {onclick: userListItemOnClick},
        ` Log title: ${log.title}
        Author: ${log.author.trim()}
        Log id: ${log.run_id}
      `);
    }),
    m('div.footer', [
      m('p[style = float: right;margin:0;]', 'Software for Science')
    ]))
  }
};
/**
 * @param  {mouseEvent} mouseEvent
 */
function userListItemOnClick(mouseEvent) {
  const id = mouseEvent.target.getAttribute('value');
  m.route.set('/detailedView', {id: id});
}

// Author: ${log.author.trim()}
