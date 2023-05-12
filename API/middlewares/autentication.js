const jwt = require('jsonwebtoken');
const secretToken=process.env.SECRET_JWT_SEED;

const verificarAuth = (req, res, next) => {
  // Leer headers
  let token = req.get('token');
  jwt.verify(token, secretToken, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        result: 401,
        mensaje: 'Error de token',
        error: error.name,
      });
    }
    // Creamos una nueva propiedad con la info del usuario
    req.usuario = decoded.data; //data viene al generar el token en login.js
    next();
  });
};
let verificaRol = (req, res, next) => {
  let rol = req.usuario.role;
  if (rol !== 'ADMIN') {
    return res.status(401).json({
      result: 0,
      mensaje: 'Rol no autorizado!',
    });
  }
  next();
};

module.exports = { verificarAuth, verificaRol };
