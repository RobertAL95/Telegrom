const store = require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Nombre inválido');
    }
    
    const user = {
        name,
    };

    return store.add(user);
}

function getAllUsers(name) {

  return store.getAll(name);
}

async function getOneUser(id) {
    if(!id){
        return Promise.reject('there is not valid id')
    }
    return await store.get(id);
}

function deleteUser(id){
    if(!id){
        return Promise.reject('there is not valid id')
    }
    return store.deleteUsers(id)
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    deleteUser
}
