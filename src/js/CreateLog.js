const m = require('mithril');
const Log = require('./Log');
const random = Math.floor(Math.random() * 6) + 1 

module.exports = {
 oninit: () => {inputData.subsystem = 'something', inputData.created = '2018-09-01T22:00:00.000Z', inputData.class = '123', inputData.run = random},
  view: function() {
    return m('form', {
      onsubmit: function(e) {
        e.preventDefault();
        // Log.addData(parseInputDataToJson());
        Log.addData(inputData).then(navigate, function(reason) {
          console.log('Alles is kapot, omdat: {}', reason);
        });
      }
    },
    [
      m('h1', 'Create Log'),
      m('label.label[style = display: none;]', 'Run number:'),
      m('input.input[style = display: none;][type = text][placeholder = Run][name = run]', {
        oninput: m.withAttr('value', function(value) {
          inputData.run = value;
        })
      }),
      m('label.label[style = display: none;]', 'Created:'),
      m('input.input[type = text][placeholder = Created][name = created][style = display: none;]', {
        oninput: m.withAttr('value', function(value) {
          inputData.created = value;
        })
      }),
      m('label.label[style = display: none;]', 'Subsystem:'),
      m('input.input[type = text][placeholder = Subsystem][name = subsystem][style = display: none;]', {
        oninput: m.withAttr('value', function(value = 'something') {
          inputData.subsystem = value;
        })
      }),
      m('label.label[style = display: none;]', 'Class:'),
      m('input.input[type = text][placeholder = Class][name = class][style = display: none;]', {
        oninput: m.withAttr('value', function(value) {
          inputData.class = value;
        })
      }),
      m('label.label', 'Type:'),
      m('input.input[type =text][placeholder = Type][name = type][required]', {
        oninput: m.withAttr('value', function(value) {
          inputData.type = value;
        })
      }),
      m('label.label', 'Author'),
      m('input.input[type = text][placeholder = Author][name = author][required]', {
        oninput: m.withAttr('value', function(value) {
          inputData.author = value;
        })
      }),
      m('label.label', 'Log title:' ),
      m('input.input[type = text][placeholder = Log Title][name = title][required]', {
        oninput: m.withAttr('value', function(value) {
          inputData.title = value;
        })
      }),
      m('label.label', 'Log text:'),
      m('textarea.inputfield[placeholder = Type log text here][name = log_entry_text][required]', {
        oninput: m.withAttr('value', function(value) {
          inputData.log_entry_text = value;
        })
      }),
      m('button#button.submit-button[type = submit]', 'Submit'),
      m('div.footer', [
        m('p[style = float: right;margin:0;]', 'Software for Science')
      ])
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
function navigate() {
  m.route.set('/fileUpload');
}

