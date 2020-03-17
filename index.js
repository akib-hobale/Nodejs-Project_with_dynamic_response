const express = require('express');
const app = express();

if (!global.Response)
global.Response = require('./utils/Response');  //response structure makes global

if (!global.STATUS_CODE)
global.STATUS_CODE = require('./constants/StatusCodes');    //status codes used for sending response makes global

if (!global.CUSTOM_MESSAGE)
global.CUSTOM_MESSAGE = require('./constants/CustomMessages');  //messages used for sending response makes global

require('./startUp/server')(app);

require('./startUp/cors')(app);

require('./startUp/router')(app,express);

require('./startup/db')();



