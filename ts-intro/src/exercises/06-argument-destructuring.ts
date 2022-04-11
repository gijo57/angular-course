export interface Product {
  desc: string;
  price: number;
}

const telephone: Product = {
  desc: 'Nokia A1',
  price: 150
};

const tablet: Product = {
  desc: 'iPad Air',
  price: 350
};

export const calculateVAT = (products: Product[]): [number, number] => {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.24];
};

const products = [telephone, tablet];

const [total, VAT] = calculateVAT(products);

console.log('Total:', total);
console.log('VAT:', VAT);
