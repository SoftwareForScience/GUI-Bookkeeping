const m = require('mithril');
// const nav = require('./NavBar');

module.exports = {
  // onintit: bla(),
  view: function() {
    return m('form.border', [
      m('div.image-container', [
        m('img.img', {src: '../../images/ALICE.PNG'})
      ]),
      m('div.container', [
        m('label', 'Username'),
        m('input.input-login[type = text][placeholder= Enter username]'),
        m('label', 'Password'),
        m('input.input-login[type = text][placeholder= Enter password]'),
        m('a.button.button-login[type = submit]', {href: '#!/welcomeScreen'}, 'Login'),
        m('p', 'Remember me')
      ]),
      m('div.container[style = background-color: #f1f1f1]', [
        m('span[style = float: right; padding-top: 16px;]', 'Alice')
      ])
    ]);
  }
};

//   function Check() {
//     if (document.getElementById('shift').checked = true) {
//     // console.log('shifter');
//     }
//   }

// //   function Disappear(){
// //       console.log('hello world');
// //     var x = navBar.getElementById('navigation');
// //     if(x.style.display === 'none'){
// //         x.style.display = 'block';
// //     }
// //     else x.style.display = 'none';
// //   }
// {onclick: function Disappear() {
//     let x = document.getElementById('demo');
//     if (x.style.display === 'none') {
//       x.style.display = 'block';}
//     else {
//       x.style.display = 'none';
//     }
//   }}
