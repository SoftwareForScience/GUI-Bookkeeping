const m = require('mithril');

module.exports = {
  view: function() {
    return [
      m('div.bar', [
        m('a.menu-button', {href: '#!/welcomeScreen'}, 'Alice'),
        m('a.menu-button', {href: '#!/logList'}, 'Loglist'),
        m('a.menu-button', {href: '#!/createLog'}, 'Create log'),
        m('a.menu-button.demo', {href: '#!/fileUpload'}, 'hello')
      ])
    ];
  }
};


// function example() {
//     var txt;
//     if (confirm("Press a button!")) {
//         txt = "You pressed OK!";
//     } else {
//         txt = "You pressed Cancel!";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }
