const Model = require('./model');

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

function listChats(userId) {
	let filter = {};
	if (userId) {
		filter = {
			users: userId,
		}
	}

	return Model.find(filter)
		.populate('users')
		.exec() // Devolver una Promesa en lugar de utilizar una callback
}


module.exports = {
    add: addChat,
    list: listChats,
}