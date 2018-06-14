const m = require('mithril');
window.$ = window.jQuery = require('jquery');
// module.import = '../sass/styles.scss';
import '../sass/styles.scss';
const LogList = require('./LogList');
const CreateLog = require('./CreateLog');
const welcomeScreen = require('./Welcome');
const fileUpload = require('./FileUpload');
const detailedView = require('./DetailedView');
const navBar = require('./NavBar');
const Login = require('./LoginPage');
const view = require('./MoveSystem');

const headerDiv = document.getElementById('header');
const contentDiv = document.getElementById('content');

m.route(document.body, '/logIn', {
  '/logIn':         {render: () => m(Login)},
  '/logList':       {render: () => m(navBar, m(LogList))},
  '/createLog':     {render: () => m(navBar, m(CreateLog))},
  '/welcomeScreen': {render: () => m(navBar, m(welcomeScreen))},
  '/fileUpload':    {render: () => m(navBar, m(fileUpload))},
  '/detailedView':  {render: () => m(navBar, m(detailedView))},
  '/view':          {render: () => m(navBar, m(view))}
})

