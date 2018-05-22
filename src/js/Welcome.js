const m = require('mithril');

module.exports = {
  view: function() {
    return [
      m('', 'Welcome to ALICE logbook system!'),
      m('br'),
      m('', 'ALICE is the acronym for A Large Ion Collider Experiment.')
    ];
  }
};
