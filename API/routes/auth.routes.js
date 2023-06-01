const { Router } = require('express');
const router = Router();
 const { M_person } = require('../models/person');
router.get('/login', async (req, res) => {
    try {
      
         const { user, pass } = req.query;
        if(!user)
            throw "USUARIO ES REQUERIDO";
        if(!pass)
            throw "CONTRASEÑA ES REQUERIDA";
       
        const bcrypt = require('bcrypt');
        const jwt = require('jsonwebtoken');
        const secretToken = process.env.SECRET_JWT_SEED;
        const expiresIn = process.env.JWT_EXPIRE_IN;
        const userDB = await M_person.findOne({ 'email': user });   
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
router.post('/register',async(req,res)=>{
  try {
    
    const {
        name:alias,
        password,
        email,
    }= req.body;
    if (!alias) throw 'NOMBRE ES REQUERIDO';
    if(!email)
        throw "EMAIL ES REQUERIDO";
    if(!password)
        throw "CONTRASEÑA ES REQUERIDA";
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const pass = bcrypt.hashSync(password, saltRounds);
     
    //valid if user alredy exist 
    const userDB = await M_person.findOne({ $or: [{ email: email }] });
      if (userDB) {
        throw 'Email Ya registrados';
      }
    const newUserDBInsert = new M_person({
      name: alias,
      email,
      user: {
        name: email,
        password: pass,
      },
    });
    let newUserDB= await newUserDBInsert.save();
    delete newUserDB.user.password;
    res.json({
        result:1,
        user:newUserDB,
        message:"USUARIO CREADO"
    })
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.json({
      result: 0,
      message,
    });
  }
})

module.exports = router;