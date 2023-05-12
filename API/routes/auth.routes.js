const { Router } = require('express');
const router = Router();

router.get('/login', async (req, res) => {
    try {
      
         const { user, pass } = req.query;
        if(!user)
            throw "USUARIO ES REQUERIDO";
        if(!pass)
            throw "CONTRASEÑA ES REQUERIDA";
        const {  M_person } = require("../models/person");
        const bcrypt = require('bcrypt');
        const jwt = require('jsonwebtoken');
        const secretToken = process.env.SECRET_JWT_SEED;
        const expiresIn = process.env.JWT_EXPIRE_IN;
        const userDB = await M_person.findOne({ 'user.name': user });   
        if(!userDB){
            throw "USUARIO NO EXISTE";
        }
        if (!bcrypt.compareSync(pass, userDB.user.password)) {
            throw 'Usuario o contraseña! inválidos';
        }
        let token = jwt.sign(
          {
            data: userDB,
          },
          secretToken,
          { expiresIn}
        );
        delete userDB.user.password;
          return res.json({
            result: 1,
            token,
            user: userDB,
          })

    } catch (error) {
       let message;
       if (error instanceof Error) message = error.message;
       else message = String(error);
        res.json({
            result:0,
            message
        })
    }
  
});

module.exports = router;