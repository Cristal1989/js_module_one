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

// import { hello, goodbye } from './greeter.js';
// console.log(hello());
// console.log(goodbye());
// const dog = {
//   name: 'Sharik',
//   age: 12,
//   state: 'Is Happy',
//   barking: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); //{"name":"Sharik","age":12,"state":"Is Happy","barking":true}

// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log('Woof!');
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// const json = '{"name":"Mango","age":3,"isHappy":true}';
// const dog = JSON.parse(json);
// console.log(dog); //{ name: 'Mango', age: 3, isHappy: true }
// console.log(dog.name); //'Mango'

try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log('✅ This is fine, we handled parse error in try...catch');
