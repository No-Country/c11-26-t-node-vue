const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/');
router.get('/:id');
router.patch('/:id',
  [
    check('name', 'The name is require').not().isEmpty(),
    check('email', 'The email is require').not().isEmpty(),
    check('email', 'The email must be a correct format').isEmail(),    
  ]);

router.patch('/password/:id',
  [
    check('currentPassword', 'The current password must be mandatory')
      .not()
      .isEmpty(),
    check('newPassword', 'The new password must be mandatory ').not().isEmpty(),   
  ]);

router.delete('/:id');

module.exports = {
  usersRouter: router,
};
