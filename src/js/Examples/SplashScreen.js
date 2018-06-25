const m = require('mithril');

module.exports = {
  view: function() {
    return m('a', {href: '#!/hello'}, 'Enter!');
  }
};
