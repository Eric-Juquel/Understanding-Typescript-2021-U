import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate, validateOrReject } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 12.99 },
];

const newProd = new Product('', -5.99);

validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('Validation Errors!');
    console.log('errors: ', errors);
  } else {
    console.log(newProd.getInformation());
  }
});

//or

const validateOrRejectExemple = async (input: object) => {
  try {
    await validateOrReject(input);
  } catch (errors) {
    console.log('validation failed, Errors :', errors);
  }
};

validateOrRejectExemple(newProd);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
