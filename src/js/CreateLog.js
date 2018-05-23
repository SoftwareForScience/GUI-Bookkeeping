const m = require('mithril');
// const Log = require('./Log');

module.exports = {
  // oninit: Log.addData(),
  view: function() {
    return m('form', {
      onsubmit: function(e) {
        e.preventDefault();
        // Log.addData(parseInputDataToJson());
        // Log.addData(inputData)
        // .then(navigate, function(reason) {
        // //   // console.log('Yo alles is kapot, omdat: {}', reason);
        // });
      }
    },
    [
      m('h1', 'Create Log'),
      m('label.label', 'Run number:'),
      m('input.input[type = text][placeholder = Run][name = run]', {
        oninput: m.withAttr('value', function(value) {
          inputData.run = value;
        })
      }),
      m('label.label', 'Created:'),
      m('input.input[type = text][placeholder = Created][name = created]', {
        oninput: m.withAttr('value', function(value) {
          inputData.created = value;
        })
      }),
      m('label.label', 'Subsystem:'),
      m('input.input[type = text][placeholder = Subsystem][name = subsystem]', {
        oninput: m.withAttr('value', function(value) {
          inputData.subsystem = value;
        })
      }),
      m('label.label', 'Class:'),
      m('input.input[type = text][placeholder = Class][name = class]', {
        oninput: m.withAttr('value', function(value) {
          inputData.class = value;
        })
      }),
      m('label.label', 'Type:'),
      m('input.input[type =text][placeholder = Type][name = type]', {
        oninput: m.withAttr('value', function(value) {
          inputData.type = value;
        })
      }),
      m('label.label', 'Author'),
      m('input.input[type = text][placeholder = Author][name = author]', {
        oninput: m.withAttr('value', function(value) {
          inputData.author = value;
        })
      }),
      m('label.label', 'Log title:' ),
      m('input.input[type = text][placeholder = Log Title][name = title]', {
        oninput: m.withAttr('value', function(value) {
          inputData.title = value;
        })
      }),
      m('label.label', 'Log text:'),
      m('textarea.inputfield[placeholder = Type log text here][name = log_entry_text]', {
        oninput: m.withAttr('value', function(value) {
          inputData.log_entry_text = value;
        })
      }),
      m('button#button.submit-button[type = submit]', 'Submit')
      // m('a.button', {href:'#!/logList'}, 'Submit')
    ]);
  }
};
const inputData = {};
// /**
//  * Converts form into JSON.
//  * @param {json} inputData Stringyfy form data.
//  * @return {json} The stingyfied form data
//  */
// function parseInputDataToJson() {
//   return JSON.stringify(inputData);
// }
/**
 */
// function navigate() {
//   m.route.set('/fileUpload');
// }

