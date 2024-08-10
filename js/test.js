// const validator = require('validator');
// const validatorEmail = email => {
//   return validator.isEmail(email);
// };
// console.log('Это почта валидна? :', validatorEmail('mail@mail.com')); //Это почта валидна? : true
// console.log('Это почта валидна? :', validatorEmail('mail.com')); //Это почта валидна? : false

// Валидатор библиотеки joi
// const joi = require('joi');
// const shortid = require('shortid');

// const pwdScheme = joi.string().min(6).max(12).alphanum();
// console.log(pwdScheme.validate('jhhsdF123'));

// console.log(shortid.generate());

import { hello, goodbye } from './greeter.js';
console.log(hello());
console.log(goodbye());
