const validator = require('validator');
const validatorEmail = email => {
  return validator.isEmail(email);
};
console.log('Это почта валидна? :', validatorEmail('mail@mail.com')); //Это почта валидна? : true
console.log('Это почта валидна? :', validatorEmail('mail.com')); //Это почта валидна? : false
