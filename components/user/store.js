const Model = require('./model');

function add(user){
    const myUser = new Model(user);
    return myUser.save();
}

function getAll(name) {
    let filter = {};
    if (name !== null && name !== undefined) {
        filter = { name: new RegExp('^'+name+'$', "i") };
    }
    return Model.find(filter);
}

function get(id) {
    return Model.findOne({ _id: id });
}

async function deleteUsers(id) {
    return Model.deleteOne({ _id: id });
}

module.exports = {
    add,
    getAll,
    get,
    deleteUsers
};
