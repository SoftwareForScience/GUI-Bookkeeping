const m = require('mithril');
const UserService = require('./UserService');
const Log = require('./Log');
// const nav = require('./NavBar');

module.exports = {
  view: function() {
    return m('form.border', {onsubmit: logInUser}, [
      m('div.image-container', [
        m('img.img', {src: '../../images/ALICE.PNG'})
      ]),
      m('div.container', [
        m('label', 'Username'),
        m('input.input-login', {type: 'text', placeholder: 'Enter username'}),
        m('label', 'Password'),
        m('input.input-login[type = password]', {placeholder: 'Enter password'}),
        m('button.login[style = background-color: #d62631;color:white;]',{type: 'submit'}, 'Login'),
        m('input[id=checkbox][type= checkbox][style= color:black;]'),
        m('label[for=checkbox]', ' Remember me' )
      ]),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
    ]);
  }
};

logInUser = function(data) {
  data.preventDefault();
  let username = data.target[0].value;
  let role = username === 'Alice' ? 'subsystemruncoordinator' : 'shifter';
  UserService.logInUser({name: username, roles: role});
  m.route.set('/welcomeScreen');
};

