import { Product, calculateVAT } from './06-argument-destructuring';

const shoppingCart: Product[] = [
  {
    desc: 'Telephone 1',
    price: 400
  },
  {
    desc: 'Telephone 2',
    price: 1700
  }
];

const [total, VAT] = calculateVAT(shoppingCart);

console.log('Total: ', total);
console.log('VAT: ', VAT);
