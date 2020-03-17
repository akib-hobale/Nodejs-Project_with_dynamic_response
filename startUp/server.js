
const config =require('./config');

const port = process.env.PORT || config.PORT;
module.exports = (app) =>{
    app.listen(port,()=>{
        console.log("Server is connectd on Port",port);
    })
}