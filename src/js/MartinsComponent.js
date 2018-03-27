const m = require("mithril");
let count = 0;

module.exports = {
    view: function() {
        return [
            m("h1", "Hello World!"),
            m("button", {onclick: increment, style: "color:red;"}, count + " clicks")
        ]
    }
}


var increment = function() {
    m.request({
        method: "PUT",
        url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
        data: {count: count + 1},
        withCredentials: true,
    })
    .then(function(data) {
        count = parseInt(data.count)
    })
}