const m = require('mithril');
// const nav = require('./NavBar');

module.exports = {
//   onintit: login(),
  view: function() {
    return m('', [
      m('div[style = margin:auto;]', [
        m('label', 'User name:'),
        ' ',
        m('input[type= radio][id = shift][name = role][value = Shifter]'),
        ' Shifter ',
        m('input[type = radio][id = src][name = role][value = SubsystemCoordinator]'),
        ' Subsystem run Coordinator',
        m('br'),
        m('label[style = color:black;]', 'Password'),
        m('input[type = text]'),
        // m('button[id = gone]', {href:'#!/detailedView'},'Log in'),
        m('a', {href: '#!/welcomeScreen'}, 'Log in'),
        m('p[id = demo]', 'Test')
      ])
    ]);
  }
};

// function login() {
//   if (m.route .get = '/login') {
//     // console.log('hello');
//     nav.render = null;
//   }
// }

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

// //   function myFunction() {
// //     document.getElementById("demo").innerHTML = "Hello World";
// //   }
// }
