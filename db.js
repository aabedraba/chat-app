const mongoose = require('mongoose');

function connect(dbParams) {
    console.log(dbParams);
    mongoose.connect(dbParams.url, {
    user: dbParams.user, 
    pass: dbParams.password,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected!'))
    .catch(err => console.error('DB Connection error: ', err));

}

module.exports = connect;