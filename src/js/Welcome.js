const m = require('mithril');
const UserService = require('./UserService');

module.exports = {
  view: function() {
    return [
      m('div[style = position: relative;text-align: center;color: white;]', 
      [
        m('img[height=200dp;][width = 100%;]', {src: '../../images/ALICEPIC.jpg'}),
        m('div[style= position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:200%;]', `Hi ${UserService.getUser().name}! Welcome to ALICE logbook system!`)
      ]),
      m('', `Hi ${UserService.getUser().name}! Welcome to ALICE logbook system!`),
      m('br'),
      m('img.img', {src: '../../images/ALICE.PNG'}),
      m('', 'ALICE is the acronym for A Large Ion Collider Experiment.'),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
    ];
  }
};
