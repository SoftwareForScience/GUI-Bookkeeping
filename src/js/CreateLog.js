const m = require('mithril');
const Log = require('./Log');
const random = Math.floor(Math.random() * 6) + 1 
const types = ["Log Entry", "End Shift", "Other"];
const template = {
  end_shift: `This is the 'end of shift' report from shift: ... The shift went ... because ... the things I did this shift where ... `
}

module.exports = {
 oninit: () => {inputData.subsystem = 'something', inputData.class = '123', inputData.run = random, inputData.type = types[0]},
  view: function() {
    return m('form', {
      onsubmit: function(e) {
        e.preventDefault();
        inputData.created = new Date().toJSON();

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
      m('label.label', 'Type:'),
      m('select',{onchange: m.withAttr('value', function(value){
        inputData.type = value;
        if (value === types[1]) {
          document.getElementById("body").value = template.end_shift;
        }
      })} ,[
        m('option', types[0]),
        m('option', types[1]),
        m('option', types[2])
      ]),
      m('label.label', 'Author'),
      m('input.input[type = text][placeholder = Author][name = author][required][maxlength=50]', {
        oninput: m.withAttr('value', function(value) {
          inputData.author = value;
        })
      }),
      m('label.label', 'Log title:' ),
      m('input.input[type = text][placeholder = Log Title][name = title][required][maxlength=50]', {
        oninput: m.withAttr('value', function(value) {
          inputData.title = value;
        })
      }),
      m('label.label', 'Log text:'),
      m('textarea.inputfield[id = body][placeholder = Type log text here][name = log_entry_text][required][maxlength=500]', {
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

