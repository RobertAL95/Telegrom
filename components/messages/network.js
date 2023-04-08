const express = require('express');
const multer = require('multer')
const response = require('../../network/response.js');
const controller = require('./controller')
const router = express.Router()


const upload = multer({
    dest: 'public/files/',
})

router.get('/', (req, res)=>{
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
        .then((messageList)=>{
            response.success(req, res, messageList, 200)
        })
        .catch(e=> {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post('/', upload.single('file'), function (req, res) { 
    
    console.log(req.file);
    
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);    
        })
        .catch(e => {
            response.error(req, res, 'Información inválida', 400, e);
        });
});
router.patch('/:id', (req, res)=>{
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e=>{
            response.error(req, res, 'Error interno', 500, e)
        })
    // res.send('OK')
})

router.delete('/:id', (req, res)=>{
    controller.deleteMessage(req.params.id)
    .then(()=> {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e=>{
        response.error(req, res, 'Error interno', e)
    })
})

module.exports = router;
