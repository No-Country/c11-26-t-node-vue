const { Schema, model } = require('mongoose');

const UserSchema = Schema(
  {
    name: {
      type: String,
      require: [true, 'El nombre es obligatorio'],
    },
    email: {
      type: String,
      require: [true, 'El correo es obligatorio'],
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'La contraseña es obligatoria'],
    },    
    role: {
      type: String,
      require: true,
			default: 'user',
      enum: ['admin', 'user'],
    },
    status: {
      type: Boolean,
      default: true,
    },
		passwordChangedAt:{
			type: Date,
			require: false,			
		}
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', UserSchema);