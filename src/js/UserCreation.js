const m = require('mithril');
const User = require('./User');

module.exports = {
  view: function() {
    return m('form', {
      onsubmit: function(e) {
        e.preventDefault();
        User.add(inputData);
      }
    },
    [
      m('label.label', 'First Name:'),
      m('input.input[type=text][placeholder=First name][name = firstName]', {
        oninput: m.withAttr('value', function(value) {
          inputData.firstName = value;
        })
      }),
      m('label.label', 'Last Name:'),
      m('input.input[type = text][placeholder = Last name][name = lastName]', {
        oninput: m.withAttr('value', function(value) {
          inputData.lastName = value;
        })
      }),
      m('button.button[type = submit]', 'Add User')
    ]
    );
  }
};
const inputData = {};
