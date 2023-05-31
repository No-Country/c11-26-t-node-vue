const { Schema, model } = require('mongoose');
const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido',
};
const personSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true }, //email primary
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
