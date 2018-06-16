const m = require('mithril');
const UserService = require('./UserService');
let user;
module.exports = {
  oninit: function() {
    user = UserService.getUser().name;
  },
  view: function() {
    return [
      m('div[style = position: relative;text-align: center;color: white;]', 
      [
        m('img[height=200dp;][width = 100%;]', {src: '../../images/ALICEPIC.jpg'}),
        m('div[style= position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:200%;]', `Hi ${user}! Welcome to ALICE logbook system!`)
      ]),
      m('', `Hi ${user}! Welcome to ALICE logbook system!`),
      m('br'),
      m('', 'ALICE is the acronym for A Large Ion Collider Experiment.'),
      m('div.right', [
        m('p[style = font-weight: bold;font-size: large;text-decoration: underline;]', 'Announcements'),
        m('p', '- Snow storm tommorow!'),
        m('p', '- Canteen is closed this tuesday'),
        m('p', '- Building C is being renovated until the 9th of October')
      ]),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
    ];
  }
};
