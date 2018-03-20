/* Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
*
* This software is distributed under the therms of the
* GNU General Public Licence version 3 (GPL) version 3,
* copied verbatim in the file "LICENSE"
*
*/

/** This function changes the color of the button */
(() => {
  "use strict";
  $(function() {
    console.log( "ready!" );
    //m.render(document.body, "helhjgjhgjhgjhgjhglo world")
    document.getElementById("test").addEventListener("click", changeColor);
  });

})();

// index.js

// function changeText(){
//   document.getElementById('test').innerHTML = "Knop!";
// }
//
// var jcontent = {
//   "word" : "hello world"
//
// }
//
// function doSomething() {
// var output = document.getElementById('test');
// output.innerHTML = jcontent.word;
// }
//
// var showData = null;
// function getData(url){
//   var demoText = document.getElementById('demo');
//   var xmlHttp = new XMLHttpRequest();
//   var url = 'http://145.28.199.181:8080/log/entries';
//
//   if(xmlHttp){
//     xmlHttp.open('GET', url, true);
//     xmlHttp.withCredentials = false;
//     //xmlHttp.setRequestHeader("Content-type", "application/json");
//     xmlHttp.onload = function(res)  {
//        console.log(res['target'] ['response'])
//        showData = res ['target'] ['response'];
//        demoText.innerText = showData;
//
//      }
//     xmlHttp.send();
//   }
//
// }
//
function changeColor() {
  document.getElementById('test').style.backgroundColor = 'yellow';
  console.log("before transaction");
}
//
// module.exports = {changeColor};


