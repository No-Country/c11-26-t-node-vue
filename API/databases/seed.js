const bcrypt = require("bcrypt");
const saltRounds = 10;
var password = bcrypt.hashSync("123456", saltRounds);

const userDefault={
    full_name: "USER ADMIN",
    name: "COHORTE11",
    lastname: "NO COUNTRY",
    identity: "999999999999",
    email: "test@test.com", //email primary
    phone: "+593961255848",
    user: {
      name: "admin",
      password,
      active: true,
      role: "ADMIN"
    },
};

const { M_person } = require('../models/person');
const createDefaultUser = async () => {
        try {
            const userDB = await M_person.findOne({"user.name": userDefault.user.name});   
            if(!userDB){
                const user = new M_person(userDefault);
                await user.save();
                console.log("USUARIO ADMINISTRADOR CREADO");
            }
        } catch (error) {
            console.log(error);
        }
    }

const start=async()=>{
    await createDefaultUser();
}

module.exports = start;