const { Schema, model } = require('mongoose');
const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido',
};
const personSchema = new Schema(
  {
    full_name: { type: String, trim: true },
    name: { type: String, trim: true },
    lastname: { type: String, trim: true },
    identity: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'EL NUMERO DE IDENTIDAD ES necesario'],
    },
    email: { type: String, trim: true }, //email primary
    phone: { type: String, trim: true },
    user: {
      name: {
        type: String,
        trim: true,
        required: [true, 'El nombre es necesario'],
      },
      password: {
        type: String,
        trim: true,
        required: [true, 'El password es necesario'],
      },
      active: { type: Boolean, default: true },
      role: { type: String, default: 'USER', enum: roles },
    },
  },
  { timestamps: true }
);
const M_person = model('persons', personSchema);
module.exports={
  M_person
} 
