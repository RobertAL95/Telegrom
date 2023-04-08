const db = require('mongoose');

db.Promise = global.Promise;
// const uri =
// 'mongodb+srv://chat_platzi:Ylhn5XDfesN9tgOu@cluster0.jhbxebe.mongodb.net/?retryWrites=true&w=majority';

async function connect(url){

    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));
}

module.exports = connect;

