const User = require('../models/User');

// funcion para crear usuarios y guardarlos en array
exports.createUser = async (req, res) => {
    let user = new User(req.body);
};
