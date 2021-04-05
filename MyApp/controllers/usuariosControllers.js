const usuario = require('../models/usuarios');

const usuariosController = {
    index: (req, res) => {
        return res.send(usuario.listarUsuarios());
    }
}

module.exports = usuariosController;