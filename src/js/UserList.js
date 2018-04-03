let m = require('mithril');
let User = require('./User');
// console.log(User);

module.exports = {
  oninit: User.loadList,
  view: function() {
    return m('.user-list', User.list.map(function(user) {
      return m(
        'a.user-list-item',
        {href: '/edit/' + user.id, oncreate: m.route.link}, user.firstName + ' ' + user.lastName);
    }));
  }
};
