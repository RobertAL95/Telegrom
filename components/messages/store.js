const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if(filterUser !== null){
    filter = {
      user: filterUser
    }
  }
  try {
    const populated = await Model.find(filter).populate('user').exec();
    return populated;
  } catch (error) {
    throw error;
  }
}


async function updateText(id, message){
  const foundmessage = await Model.findOne({
    _id: id
  });

  foundmessage.message = message;
  const newMessage = await foundmessage.save();
  return newMessage
}

async function removeMessage(id){
  return await Model.deleteOne({
    _id:id
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
  //get
  // update
  // delete
};
