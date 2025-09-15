import { StaticImageData } from 'next/image';

export interface Product {
  category: string;
  name: string;
  price: string;
  description: string;
  image: StaticImageData;
}