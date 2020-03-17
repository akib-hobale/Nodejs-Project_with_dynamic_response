
const error = require('../middleware/error');
const userRoute = require('../routes/user.route');
const rootNotFound = require('../routes/routeNotMatch');
const morgan = require('morgan');

module.exports = (app,express) =>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(morgan('dev'));

     app.use('/user',userRoute);

    app.use(rootNotFound);

    app.use(error);
}