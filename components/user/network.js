const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res)=>{
    controller.getAllUsers(req.query.name)
        .then((data)=>{
            response.success(req, res, data, 200)
        })
        .catch(err=>{
            response.error(req, res, "Error interno", 500, err)
        })
});

router.get('/:id', (req, res)=>{
    controller.getOneUser(req.params.id)
        .then((data)=>{
            if (data) {
                response.success(req, res, data, 200);
            } else {
                response.error(req, res, "Usuario no encontrado", 404);
            }
        })
        .catch(err=>{
            response.error(req, res, "Error interno", 500, err)
        })
});

router.post('/', (req, res)=>{
    controller.addUser(req.body.name)
        .then((data)=>{
            response.success(req, res, data, 201)
        })
        .catch(err=>{
            response.error(req, res, "Error interno", 500, err)
        })
});

router.delete('/:id', (req, res)=>{
    controller.deleteUser(req.params.id)
    .then((data)=>{
        if (data) {
            response.success(req, res, data, 200);
        } else {
            response.error(req, res, "Usuario no encontrado", 404);
        }
    })
    .catch(err=>{
        response.error(req, res, "Error interno", 500, err)
    })
});


module.exports = router;
