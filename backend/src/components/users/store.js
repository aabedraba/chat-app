const Model = require('./model');

function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
}

async function listUsers(){
    return Model.find();
}
module.exports = {
    add: addUser,
    list: listUsers
}