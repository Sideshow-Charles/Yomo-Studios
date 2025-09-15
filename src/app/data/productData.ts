import { Product } from '../types/products';
import product2 from '../assets/images/product2.jpeg'
import product3 from '../assets/images/project3.jpeg'

export const products: Product[] = [
  {
    category: 'Chessboards',
    name: 'Ocean Wave Chessboard',
    price: '$485',
    description: 'A stunning chessboard featuring deep blue resin waves flowing through rich walnut wood.',
    image: product2,
  },
  {
    category: 'Furniture',
    name: 'Aurora Resin Coffee Table',
    price: '$1,250',
    description: 'Live edge oak table with northern lights-inspired resin design.',
    image: product3,
  },
  {
    category: 'Chess Sets',
    name: 'Handcrafted Chess Set',
    price: '$320',
    description: 'Complete chess set with hand-turned pieces and matching storage box.',
    image: product2,
  },
];