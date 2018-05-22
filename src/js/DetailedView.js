const m = require('mithril');
let Log = require('./Log');
// let item;

// item = {author : 'Kees'}

module.exports = {
  oninit: function() {
    m.route.get();
    let id = m.route.param().id;
    // console.log(id);
    Log.getSingle(id).then(function(/* data*/) {
      // item = data;
      // console.log('i');
      // console.log(item);
      // console.log('Auteur: '+item[0].author);
      // console.log(item[0].class);
      // let author = item[0].author;
    }).catch(function(/* err*/) {});
    /* console.log(err);*/
    // function(error){
    //     console.log(error);
    //     console.log('a');
    // })
  },
  view: function() {
    return [
      m('', 'Detailed view Log'),
      m('.user-list-item', [
        m('', 'Author: Karel'),
        m('', 'Log Title: Run 1'),
        m('', 'Log text: Run was succesful!')
      ])
      // m('.user-list-item', 'Author:' + item.author.trim())
    ];
  }
};
