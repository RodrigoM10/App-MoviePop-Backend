// Rutas necesarias
const express = require('express');
const router = express.Router();

// Registrar un usuario, defino las rutas con sus metodos correspondientes.
router.post('/register', [], authController.register);

// aca le ponemos /login, para que sea /auth/login
router.post('/login', [], authController.login);

//Obtener usuario autenticado - lo obteneos con el token y el metodo get
router.get('/', authController.getUserAuthentic);

module.exports = router;
